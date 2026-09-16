// Single source of truth for all portfolio copy.
// Edit here to update names, links, projects, and content.

export const personal = {
  name: "Sooraj P S",
  title: "Full-Stack Developer & Application Security",
  email: "sooraj@example.com",
  resumeUrl: "https://example.com/resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "What I do", href: "#capabilities" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
];

export const hero = {
  eyebrow: "sooraj@dev:~$",
  eyebrowAction: "whoami",
  headline: "Building applications, then checking how they fail.",
  sub:
    "Full-stack developer working at the intersection of software engineering, application security, cloud infrastructure, and DevSecOps. I build SaaS applications end to end — and apply security practice throughout the build, not after it ships.",
  primaryCta: { label: "View my projects", href: "#projects" },
  secondaryCtas: [
    { label: "View my resume", href: personal.resumeUrl },
    { label: "Get in touch", href: "#contact" },
  ],
};

export const about = {
  body:
    "I build and support SaaS applications across the stack — modern JavaScript on the frontend, Node.js and Express services on the backend, and MongoDB underneath. I design and integrate APIs, manage authentication and authorization, and spend real time in production troubleshooting systems under load. Application security isn't a separate track for me — secure coding, vulnerability investigation, and remediation happen alongside the rest of the development lifecycle, not after a scan flags something.",
};

export const capabilities = [
  {
    title: "Engineering",
    dot: "#6C9BFF",
    items: [
      "Build and maintain full-stack web applications",
      "Develop frontend applications using React",
      "Build backend services and REST APIs with Node.js and Express",
      "Work with MongoDB and cloud-based infrastructure",
    ],
  },
  {
    title: "Security",
    dot: "#E8A33D",
    items: [
      "Implement authentication and authorization with Keycloak, OAuth and JWT",
      "Apply secure coding and application security practices",
      "Investigate vulnerabilities and work on remediation",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    dot: "#49C7A8",
    items: [
      "Improve CI/CD workflows using Jenkins and GitHub",
      "Explore DevSecOps and cloud security practice",
      "Apply AI-assisted security analysis to existing workflows",
    ],
  },
];

export const stack = [
  {
    group: "frontend",
    items: ["React", "JavaScript (ES6+)", "HTML / CSS"],
  },
  {
    group: "backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    group: "auth & security",
    items: ["Keycloak", "OAuth 2.0", "JWT", "Secure coding"],
  },
  {
    group: "devops & cloud",
    items: ["Jenkins", "GitHub / CI-CD", "Cloud infrastructure"],
  },
];

export const focus = {
  intro:
    "Full-stack engineering, application security, and DevSecOps — together, not in sequence. I'm continuously strengthening my grip on secure software development, cloud security, CI/CD security, vulnerability assessment, threat intelligence, and AI-driven security analysis.",
  items: [
    {
      key: "secure_sdlc",
      value:
        "Threading security practice through the full development lifecycle, not bolting it on at release.",
    },
    {
      key: "cicd_security",
      value: "Hardening CI/CD pipelines built on Jenkins and GitHub against common attack paths.",
    },
    {
      key: "threat_intel",
      value:
        "Tracking vulnerability and threat intelligence relevant to the stacks I actually ship.",
    },
    {
      key: "ai_security",
      value:
        "Applying AI-assisted analysis to speed up vulnerability triage and remediation.",
    },
  ],
};

export const projects = [
  {
    tag: "full-stack",
    title: "Project title",
    description:
      "One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.",
    link: null,
  },
  {
    tag: "appsec",
    title: "Project title",
    description:
      "One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.",
    link: null,
  },
  {
    tag: "devsecops",
    title: "Project title",
    description:
      "One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.",
    link: null,
  },
];

export const contact = {
  headline: "Let's build something reliable — and check it's secure.",
};