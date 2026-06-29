import classNames from "classnames/bind";
import styles from "./Marquee.module.css";

const cx = classNames.bind(styles);

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
    <div className={cx("group")} aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item} className={cx("item")}>
          {item}
          <span aria-hidden="true" className={cx("diamond")}>
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={cx("container")}>
      <div className={cx("track")}>
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
