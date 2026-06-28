import { Link } from "@tanstack/react-router";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" hash="top" className={styles.brand}>
        Mitch Ryan
      </Link>
      <div className={styles.links}>
        <Link to="/" hash="work" className={styles.link}>
          Work
        </Link>
        <Link to="/" hash="profile" className={styles.link}>
          Profile
        </Link>
        <Link to="/" hash="contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
