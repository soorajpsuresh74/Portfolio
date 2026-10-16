import Section from "./Section";
import styles from "./Focus.module.css";

export default function Focus({ focus }) {
  return (
    <Section id="focus" number="04" title="Currently focused on">
      <div className={styles.grid}>
        <div className={styles.body}>
          <p>{focus.intro}</p>
        </div>
        <ul className={styles.list}>
          {focus.items.map((item) => (
            <li key={item.key} className={styles.item}>
              <span className="mono k">{item.key}</span>
              <span className="v">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}