import type { ReactElement } from "react";
import styles from "./Nav.module.css";

export default function Nav(): ReactElement {
  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.brand}>
        Mitch Ryan
      </a>
      <div className={styles.links}>
        <a href="#work" className={styles.link}>
          Work
        </a>
        <a href="#profile" className={styles.link}>
          Profile
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
}
