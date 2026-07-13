import { useId } from "react";
import classNames from "classnames/bind";
import Eyebrow from "./Eyebrow";
import { IMAGE_WIDTHS } from "../lib/imageConfig";
import { imageUrlBuilder } from "../lib/imageUrlBuilder";
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
        src={imageUrlBuilder({
          source: "/images/contact-bg.jpg",
          w: 1280,
          q: 90,
        })}
        srcSet={IMAGE_WIDTHS.map(
          (w) =>
            `${imageUrlBuilder({ source: "/images/contact-bg.jpg", w, q: 90 })} ${w}w`,
        ).join(", ")}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className={cx("bg")}
      />
      <div className={cx("inner")}>
        <Eyebrow color="rust" transformUppercase className={cx("eyebrow")}>
          <h2 id={headingId}>03 — Contact</h2>
        </Eyebrow>
        <h3 className={cx("prompt")}>Want to build something together?</h3>
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
                {` `}
                <span aria-hidden="true" className={cx("arrow")}>
                  ↗
                </span>
              </a>
            ))}
          </div>
          <div className={cx("colophon")}>© 2026 Mitch Ryan — Berlin, DE</div>
        </div>
      </div>
    </section>
  );
}
