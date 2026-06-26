import type { ReactElement } from "react";
import styles from "./Contact.module.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ryami333" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitch-ryan-dev/" },
  { label: "Instagram", href: "https://instagram.com/dev.mitch" },
];

export default function Contact(): ReactElement {
  return (
    <section id="contact" className={styles.contact}>
      <img
        src="/images/contact-bg.jpg"
        alt=""
        aria-hidden="true"
        className={styles.bg}
      />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>03 — Contact</div>
        <div className={styles.prompt}>Got something worth building?</div>
        <a href="mailto:ohai@mitch-ryan.com" className={styles.email}>
          ohai@mitch-ryan.com
        </a>

        <div className={styles.footer}>
          <div className={styles.social}>
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                {label}
              </a>
            ))}
          </div>
          <div className={styles.colophon}>
            © 2026 Mitch Ryan — Berlin, DE
            <br />
            Set in Space Grotesk &amp; JetBrains Mono
          </div>
        </div>
      </div>
    </section>
  );
}
