import Section from "./Section";
import { about } from "../data/portfolio";
import styles from "./About.module.css";

/**
 * Renders a markdown-ish string, supporting **bold** segments.
 */
function renderRich(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <p className={styles.body}>{renderRich(about.body)}</p>
    </Section>
  );
}