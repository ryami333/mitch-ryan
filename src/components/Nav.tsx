import { Link } from "@tanstack/react-router";
import classNames from "classnames/bind";
import styles from "./Nav.module.css";

const cx = classNames.bind(styles);

export default function Nav() {
  return (
    <nav className={cx("nav")}>
      <Link to="/" hash="top" className={cx("brand")}>
        Mitch Ryan – Developer — Berlin, DE
      </Link>
      <div className={cx("links")}>
        <Link to="/" hash="work" className={cx("link")}>
          Work
        </Link>
        <Link to="/" hash="profile" className={cx("link")}>
          Profile
        </Link>
        <Link to="/" hash="contact" className={cx("link")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
