import styles from "./Footer.module.css";

export default function Footer({ personal }) {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <span>
          {personal.name} — Full-Stack Developer / AppSec / DevSecOps
        </span>
        <span id="year-mono" className="mono">
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}