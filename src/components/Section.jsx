import styles from "./Section.module.css";

export default function Section({ id, number, title, children, bordered = true }) {
  const hasHead = Boolean(title);

  return (
    <section
      id={id}
      className={[styles.section, bordered ? styles.bordered : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.inner}>
        {hasHead && (
          <div className="section-head">
            <span className="section-tag mono">{number}</span>
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}