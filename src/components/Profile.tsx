import type { ReactElement, ReactNode } from "react";
import classNames from "classnames/bind";
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

export default function Profile(): ReactElement {
  return (
    <section id="profile" className={styles.profile}>
      <img
        src="/images/profile-bg.jpg"
        alt=""
        aria-hidden="true"
        className={styles.bg}
      />
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.topRule} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.eyebrow}>02 — Profile</div>

        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>
              A decade-plus of building software, end to end.
            </h2>
            <p className={styles.body}>
              From landing pages and brochureware to enterprise apps, CMSes,
              CRMs and the occasional mobile game — I&rsquo;ve worked across the
              whole stack and most of the surface area in between. New Zealander
              by origin, now a Berlin-based permanent resident.
            </p>
            <p className={styles.body}>
              These days I lead development at Diesdas Digital, and care most
              about fast, legible tools and the small details that make them
              pleasant to live in.
            </p>
          </div>

          <dl className={styles.sheet}>
            {ROWS.map((row) => (
              <div key={row.key} className={styles.sheetRow}>
                <dt className={styles.sheetKey}>{row.key}</dt>
                <dd className={cx("sheetVal", { accent: row.accent })}>
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
