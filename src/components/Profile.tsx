import type { ReactNode } from "react";
import classNames from "classnames/bind";
import Eyebrow from "./Eyebrow";
import styles from "./Profile.module.css";

const cx = classNames.bind(styles);

interface Row {
  key: string;
  value: ReactNode;
  accent?: boolean;
}

const ROWS: Row[] = [
  { key: "ROLE", value: "Head of Development" },
  { key: "STUDIO", value: "Diesdas Digital · 6 yrs" },
  { key: "EXPERIENCE", value: "10+ years, full-stack" },
  {
    key: "SCOPE",
    value: (
      <>
        Brochureware → enterprise apps,
        <br />
        CMS · CRM · the odd mobile game
      </>
    ),
  },
  { key: "ORIGIN", value: "Aotearoa / New Zealand" },
  { key: "BASED", value: "Berlin, DE · permanent resident" },
  { key: "RECOGNITION", value: "Awwwards · FWA · Webby · W3", accent: true },
];

export default function Profile() {
  return (
    <section id="profile" className={cx("profile")}>
      <img
        src="/images/profile-bg.jpg"
        alt=""
        aria-hidden="true"
        className={cx("bg")}
      />
      <div className={cx("scanlines")} aria-hidden="true" />
      <div className={cx("top-rule")} aria-hidden="true" />

      <div className={cx("inner")}>
        <Eyebrow color="clay" transformUppercase className={cx("eyebrow")}>
          02 — Profile
        </Eyebrow>

        <div className={cx("grid")}>
          <div>
            <h2 className={cx("title")}>
              A decade-plus of building software, end to end.
            </h2>
            <p className={cx("body")}>
              From landing pages and brochureware to enterprise apps, CMSes,
              CRMs and the occasional mobile game — I&rsquo;ve worked across the
              whole stack and most of the surface area in between. New Zealander
              by origin, now a Berlin-based permanent resident.
            </p>
            <p className={cx("body")}>
              These days I lead development at Diesdas Digital, and care most
              about fast, legible tools and the small details that make them
              pleasant to live in.
            </p>
          </div>

          <dl className={cx("sheet")}>
            {ROWS.map((row) => (
              <div key={row.key} className={cx("sheet-row")}>
                <dt className={cx("sheet-key")}>{row.key}</dt>
                <dd className={cx("sheet-val", { accent: row.accent })}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
