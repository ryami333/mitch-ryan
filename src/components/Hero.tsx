import { Link } from "@tanstack/react-router";
import classNames from "classnames/bind";
import Eyebrow from "./Eyebrow";
import styles from "./Hero.module.css";
import Nav from "./Nav";

const cx = classNames.bind(styles);

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ryami333" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitch-ryan-dev/" },
  { label: "Instagram", href: "https://instagram.com/dev.mitch" },
  { label: "Email", href: "mailto:ohai@mitch-ryan.com" },
];

export default function Hero() {
  return (
    <section id="top" className={cx("container")}>
      <div inert aria-hidden="true" className={cx("shadow-nav")}>
        <Nav />
      </div>
      <div className={cx("grid")}>
        <div className={cx("lead")}>
          <div>
            <Eyebrow color="rust" className={cx("role")}>
              Head of Development — Diesdas Digital
            </Eyebrow>
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
            <img
              src="/images/portrait.jpg"
              alt="Mitch Ryan"
              className={cx("portrait-img")}
            />
          </figure>
        </div>
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
