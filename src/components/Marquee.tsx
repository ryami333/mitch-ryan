import styles from "./Marquee.module.css";

const ITEMS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Electron",
  "Sharp",
  "Storybook",
  "CMS",
  "CRM",
  "Mobile Games",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item} className={styles.item}>
          {item}
          <span className={styles.diamond}>◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
