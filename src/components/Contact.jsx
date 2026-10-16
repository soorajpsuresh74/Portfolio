import Section from "./Section";
import styles from "./Contact.module.css";

const display = (url) => url.replace(/^https?:\/\//, "");

export default function Contact({ contact, personal }) {
  const { linkedin, github } = personal.links;

  return (
    <Section id="contact" number="" title="" bordered={false}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>{contact.headline}</h2>
        <div className={styles.links}>
          {personal.email && <a href={`mailto:${personal.email}`}>{personal.email}</a>}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              {display(linkedin)}
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              {display(github)}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
