import type { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Eyebrow.module.css";

const cx = classNames.bind(styles);

interface EyebrowProps {
  children: ReactNode;
  color: "rust" | "clay";
  transformUppercase?: boolean;
  className?: string;
}

export default function Eyebrow({
  children,
  color,
  transformUppercase = false,
  className,
}: EyebrowProps) {
  return (
    <div
      className={cx("eyebrow", className)}
      data-color={color}
      data-uppercase={JSON.stringify(!!transformUppercase)}
    >
      {children}
    </div>
  );
}
