import { nav, personal } from "../data/portfolio";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.name}>{personal.name}</div>
        <ul className={styles.links}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a className={styles.cta} href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}