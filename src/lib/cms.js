// Loads portfolio content from Strapi with a stale-while-revalidate cache:
//   1. render instantly from the last good response in localStorage, or the
//      bundled defaults in src/data/portfolio.js on a first visit;
//   2. fetch fresh content from Strapi in the background on every visit;
//   3. when it differs, re-render and replace the cache.
// When Strapi is asleep or down, visitors keep seeing the cached copy.

import * as bundled from "../data/portfolio";

const API_URL = (import.meta.env.VITE_STRAPI_URL || "").replace(/\/+$/, "");

// Bump when the content shape changes so old caches are discarded.
const CACHE_KEY = "portfolio-content:v1";
// A cache older than this is ignored in favour of the bundled content.
const CACHE_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
// Render's free plan can take ~1 minute to wake up.
const FETCH_TIMEOUT_MS = 60_000;

export const defaultContent = {
  personal: bundled.personal,
  nav: bundled.nav,
  hero: bundled.hero,
  about: bundled.about,
  capabilities: bundled.capabilities,
  stack: bundled.stack,
  focus: bundled.focus,
  projects: bundled.projects,
  contact: bundled.contact,
};

export const isCmsConfigured = Boolean(API_URL);

export function readCache() {
  try {
    const entry = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (!entry?.content || Date.now() - entry.savedAt > CACHE_MAX_AGE_MS) return null;
    return entry.content;
  } catch {
    return null;
  }
}

export function writeCache(content) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), content }));
  } catch {
    // Storage full or blocked (private mode): the site still works without it.
  }
}

/** Only allow links that can't execute script: http(s), mailto, in-page anchors and paths. */
export function safeUrl(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  const url = value.trim();
  if (url.startsWith("#") || (url.startsWith("/") && !url.startsWith("//"))) return url;
  try {
    const { protocol } = new URL(url);
    return ["http:", "https:", "mailto:"].includes(protocol) ? url : null;
  } catch {
    return null;
  }
}

const text = (value, fallback = "") =>
  typeof value === "string" && value.trim() ? value : fallback;

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);

async function getJson(path, signal) {
  const res = await fetch(`${API_URL}/api/${path}`, {
    signal,
    headers: { Accept: "application/json" },
    credentials: "omit",
  });
  if (!res.ok) throw new Error(`Strapi ${path}: ${res.status}`);
  return (await res.json()).data;
}

/** Map Strapi responses onto the shape the components already use. */
function normalize({ profile, capabilities, skillGroups, projects }) {
  const d = defaultContent;
  const p = profile || {};

  const personal = {
    name: text(p.name, d.personal.name),
    title: text(p.title, d.personal.title),
    email: text(p.email, d.personal.email),
    resumeUrl: safeUrl(p.resumeUrl) ?? d.personal.resumeUrl,
    links: {
      linkedin: safeUrl(p.linkedinUrl) ?? d.personal.links.linkedin,
      github: safeUrl(p.githubUrl) ?? d.personal.links.github,
    },
  };

  return {
    personal,
    nav: d.nav,
    hero: {
      ...d.hero,
      eyebrow: text(p.heroEyebrow, d.hero.eyebrow),
      eyebrowAction: text(p.heroEyebrowAction, d.hero.eyebrowAction),
      headline: text(p.heroHeadline, d.hero.headline),
      accent: text(p.heroAccent),
      sub: text(p.heroSub, d.hero.sub),
      secondaryCtas: [
        { label: "View my resume", href: personal.resumeUrl },
        { label: "Get in touch", href: "#contact" },
      ],
    },
    about: { body: text(p.about, d.about.body) },
    focus: {
      intro: text(p.focusIntro, d.focus.intro),
      items: p.focusItems?.length
        ? p.focusItems.map(({ key, value }) => ({ key, value }))
        : d.focus.items,
    },
    contact: { headline: text(p.contactHeadline, d.contact.headline) },

    // Collections are authoritative: an empty list in the CMS means show nothing.
    capabilities: [...capabilities].sort(byOrder).map((c) => ({
      title: c.title,
      dot: /^#[0-9a-f]{6}$/i.test(c.color) ? c.color : "#6C9BFF",
      items: (c.items || []).map((i) => i.text),
    })),
    stack: [...skillGroups].sort(byOrder).map((g) => ({
      group: g.name,
      items: (g.skills || []).map((s) => s.name),
    })),
    projects: [...projects].sort(byOrder).map((pr) => ({
      id: pr.documentId,
      tag: pr.tag || "",
      title: pr.title,
      description: pr.description || "",
      link: safeUrl(pr.link),
    })),
  };
}

export async function fetchContent(signal) {
  const timeout = AbortSignal.timeout(FETCH_TIMEOUT_MS);
  const combined = AbortSignal.any ? AbortSignal.any([signal, timeout]) : signal;

  const [profile, capabilities, skillGroups, projects] = await Promise.all([
    // A missing/unpublished profile is a 404: fall back to defaults for it.
    getJson("profile?populate=*", combined).catch((err) => {
      if (combined.aborted) throw err;
      return null;
    }),
    getJson("capabilities?populate=items&sort=order:asc&pagination[pageSize]=100", combined),
    getJson("skill-groups?populate=skills&sort=order:asc&pagination[pageSize]=100", combined),
    getJson("projects?sort=order:asc&pagination[pageSize]=100", combined),
  ]);

  return normalize({ profile, capabilities, skillGroups, projects });
}
