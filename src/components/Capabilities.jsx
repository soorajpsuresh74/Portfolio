import Section from "./Section";
import { capabilities } from "../data/portfolio";
import styles from "./Capabilities.module.css";

export default function Capabilities() {
  return (
    <Section id="capabilities" number="02" title="What I do">
      <div className={styles.columns}>
        {capabilities.map((col) => (
          <div key={col.title} className={styles.col}>
            <div className={styles.head}>
              <span
                className={styles.dot}
                style={{ background: col.dot }}
              />
              <h3>{col.title}</h3>
            </div>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}