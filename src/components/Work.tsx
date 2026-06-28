import styles from "./Work.module.css";

interface Project {
  n: string;
  href: string;
  name: string;
  desc: string;
  stack: string;
  kind: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    href: "https://github.com/ryami333/delingo",
    name: "Delingo",
    desc: "Gamified German-language app — drills for mastering articles (der/die/das) and grammatical cases.",
    stack: "React · Next.js · Storybook",
    kind: "App",
  },
  {
    n: "02",
    href: "https://github.com/ryami333/mtask",
    name: "mtask",
    desc: "Keyboard-led desktop todo app for an audience of one. Minimal, fast, Sublime-inspired chrome.",
    stack: "Electron · React · TypeScript",
    kind: "Desktop Tool",
  },
  {
    n: "03",
    href: "https://github.com/ryami333/next-image-transformer",
    name: "next-image-transformer",
    desc: "Self-hosted, Sharp-powered runtime image transforms for Next.js — Imgix/Cloudinary, but inside your app.",
    stack: "Next.js · Sharp · TypeScript",
    kind: "Library",
  },
  {
    n: "04",
    href: "https://github.com/ryami333/graphql-codegen-enum-tuple-plugin",
    name: "enum-tuple-plugin",
    desc: "GraphQL Codegen plugin that emits each enum as a readonly runtime tuple of its members.",
    stack: "GraphQL · Codegen · TypeScript",
    kind: "Codegen Plugin",
  },
  {
    n: "05",
    href: "https://github.com/ryami333/water-warner",
    name: "water-warner",
    desc: "A desktop hydration reminder — a small Electron & TypeScript experiment.",
    stack: "Electron · TypeScript",
    kind: "Experiment",
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>01 — Selected Work</div>
          <div className={styles.count}>05 — Index</div>
        </div>
        <h2 className={styles.title}>Things I&rsquo;ve built.</h2>

        <div className={styles.list}>
          {PROJECTS.map((p) => (
            <a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={styles.row}
            >
              <span className={styles.rowNum}>{p.n}</span>
              <div className={styles.rowBody}>
                <div className={styles.rowName}>{p.name}</div>
                <div className={styles.rowDesc}>{p.desc}</div>
              </div>
              <div className={styles.rowStack}>{p.stack}</div>
              <div className={styles.rowKind}>{p.kind}</div>
              <span className={styles.rowArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
