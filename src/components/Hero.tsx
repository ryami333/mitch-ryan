import { Link } from "@tanstack/react-router";
import styles from "./Hero.module.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ryami333" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitch-ryan-dev/" },
  { label: "Instagram", href: "https://instagram.com/dev.mitch" },
  { label: "Email", href: "mailto:ohai@mitch-ryan.com" },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.metaTop}>
        <span className={styles.metaStrong}>Homepage — 2026</span>
        <span>Developer — Berlin, DE</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.lead}>
          <div className={styles.role}>
            Head of Development — Diesdas Digital
          </div>
          <h1 className={styles.title}>
            Mitch
            <br />
            Ryan.
          </h1>
          <p className={styles.intro}>
            Ten-plus years building software across the full spectrum — from
            landing pages and brochureware to enterprise apps, CMSes, CRMs and
            the occasional mobile game. New Zealander by origin, Berlin-based
            permanent resident.
          </p>
          <div className={styles.social}>
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <figure className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <img
              src="/images/portrait.jpg"
              alt="Mitch Ryan"
              width={380}
              height={506}
              className={styles.portraitImg}
            />
          </div>
          <figcaption className={styles.portraitCaption}>
            <span>Fig.01 — Self</span>
            <span className={styles.captionAccent}>Berlin, DE</span>
          </figcaption>
        </figure>
      </div>

      <div className={styles.metaBottom}>
        <span>Full-stack · Interactive media</span>
        <Link to="/" hash="work" className={styles.metaLink}>
          Selected work ↓
        </Link>
      </div>
    </section>
  );
}
