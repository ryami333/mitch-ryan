import { useId } from "react";
import classNames from "classnames/bind";
import Eyebrow from "./Eyebrow";
import styles from "./Contact.module.css";

const cx = classNames.bind(styles);

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ryami333" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitch-ryan-dev/" },
  { label: "Instagram", href: "https://instagram.com/dev.mitch" },
];

export default function Contact() {
  const headingId = useId();

  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className={cx("container")}
    >
      <img
        src="/images/contact-bg.jpg"
        alt=""
        aria-hidden="true"
        className={cx("bg")}
      />
      <div className={cx("inner")}>
        <Eyebrow color="rust" transformUppercase className={cx("eyebrow")}>
          <h2 id={headingId}>03 — Contact</h2>
        </Eyebrow>
        <h3 className={cx("prompt")}>
          Would you like to build something together?
        </h3>
        <a href="mailto:ohai@mitch-ryan.com" className={cx("email")}>
          ohai@mitch-ryan.com
        </a>

        <div className={cx("footer")}>
          <div className={cx("social")}>
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                rel="noreferrer"
                className={cx("social-link")}
              >
                {label}
              </a>
            ))}
          </div>
          <div className={cx("colophon")}>© 2026 Mitch Ryan — Berlin, DE</div>
        </div>
      </div>
    </section>
  );
}
