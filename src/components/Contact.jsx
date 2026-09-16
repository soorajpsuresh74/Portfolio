import Section from "./Section";
import { contact, personal } from "../data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section id="contact" number="" title="" bordered={false}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>{contact.headline}</h2>
        <div className={styles.links}>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {personal.links.linkedin.replace("https://", "")}
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {personal.links.github.replace("https://", "")}
          </a>
        </div>
      </div>
    </Section>
  );
}