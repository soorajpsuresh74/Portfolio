import { useEffect, useState } from "react";
import {
  defaultContent,
  fetchContent,
  isCmsConfigured,
  readCache,
  writeCache,
} from "./cms";

/** Portfolio content: cached/bundled immediately, refreshed from Strapi in the background. */
export function useContent() {
  const [content, setContent] = useState(() => readCache() ?? defaultContent);

  useEffect(() => {
    if (!isCmsConfigured) return;
    const controller = new AbortController();

    fetchContent(controller.signal)
      .then((fresh) => {
        writeCache(fresh);
        setContent((current) =>
          JSON.stringify(current) === JSON.stringify(fresh) ? current : fresh
        );
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          console.warn("Using cached portfolio content; CMS unavailable:", err.message);
        }
      });

    return () => controller.abort();
  }, []);

  return content;
}
