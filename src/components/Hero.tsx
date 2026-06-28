import { Link } from "@tanstack/react-router";
import classNames from "classnames/bind";
import styles from "./Hero.module.css";

const cx = classNames.bind(styles);

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ryami333" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitch-ryan-dev/" },
  { label: "Instagram", href: "https://instagram.com/dev.mitch" },
  { label: "Email", href: "mailto:ohai@mitch-ryan.com" },
];

export default function Hero() {
  return (
    <section id="top" className={cx("hero")}>
      <div className={cx("meta-top")}>
        <span className={cx("meta-strong")}>Homepage — 2026</span>
        <span>Developer — Berlin, DE</span>
      </div>

      <div className={cx("grid")}>
        <div className={cx("lead")}>
          <div className={cx("role")}>
            Head of Development — Diesdas Digital
          </div>
          <h1 className={cx("title")}>
            Mitch
            <br />
            Ryan.
          </h1>
          <p className={cx("intro")}>
            Ten-plus years building software across the full spectrum — from
            landing pages and brochureware to enterprise apps, CMSes, CRMs and
            the occasional mobile game. New Zealander by origin, Berlin-based
            permanent resident.
          </p>
          <div className={cx("social")}>
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={cx("social-link")}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <figure className={cx("portrait")}>
          <div className={cx("portrait-frame")}>
            <img
              src="/images/portrait.jpg"
              alt="Mitch Ryan"
              width={380}
              height={506}
              className={cx("portrait-img")}
            />
          </div>
          <figcaption className={cx("portrait-caption")}>
            <span>Fig.01 — Self</span>
            <span className={cx("caption-accent")}>Berlin, DE</span>
          </figcaption>
        </figure>
      </div>

      <div className={cx("meta-bottom")}>
        <span>Full-stack · Interactive media</span>
        <Link to="/" hash="work" className={cx("meta-link")}>
          Selected work ↓
        </Link>
      </div>
    </section>
  );
}
