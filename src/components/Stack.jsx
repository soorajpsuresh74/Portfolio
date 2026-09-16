import Section from "./Section";
import { stack } from "../data/portfolio";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <Section id="stack" number="03" title="Stack">
      <div className={styles.grid}>
        {stack.map((group) => (
          <div key={group.group} className={styles.group}>
            <div className="stack-group-title mono">{group.group}</div>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}