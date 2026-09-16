import { hero } from "../data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div>
          <div className="hero-eyebrow mono">
            <span className={styles.prompt}>{hero.eyebrow}</span>{" "}
            {hero.eyebrowAction}
          </div>
          <h1>
            {hero.headline.split("fail")[0]}
            <span className={styles.accent}>fail</span>.
          </h1>
          <p className={styles.sub}>{hero.sub}</p>
          <div className={styles.ctas}>
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            {hero.secondaryCtas.map((cta) => (
              <a
                key={cta.label}
                className="btn btn-secondary"
                href={cta.href}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.vennWrap}>
          <Venn />
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  fill: "#8b96a6",
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "12.5px",
};

const centerStyle = {
  fill: "#e7ecf2",
  fontFamily: "Space Grotesk, sans-serif",
  fontWeight: 600,
  fontSize: "15px",
};

function Venn() {
  return (
    <svg
      viewBox="0 0 380 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Venn diagram of Engineering, Security, and Cloud & DevOps intersecting at DevSecOps"
    >
      <circle cx="150" cy="140" r="108" fill="#49C7A8" opacity="0.16" stroke="#49C7A8" stroke-width="1.2" />
      <circle cx="230" cy="140" r="108" fill="#E8A33D" opacity="0.16" stroke="#E8A33D" stroke-width="1.2" />
      <circle cx="190" cy="225" r="108" fill="#6C9BFF" opacity="0.13" stroke="#6C9BFF" stroke-width="1.2" />
      <text x="72" y="95" style={labelStyle}>Engineering</text>
      <text x="255" y="95" style={labelStyle}>Security</text>
      <text x="150" y="322" style={labelStyle}>Cloud & DevOps</text>
      <text x="190" y="192" text-anchor="middle" style={centerStyle}>DevSecOps</text>
    </svg>
  );
}