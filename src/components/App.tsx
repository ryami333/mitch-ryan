import Nav from "./Nav";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Work from "./Work";
import Profile from "./Profile";
import Contact from "./Contact";
import classNames from "classnames/bind";
import styles from "./App.module.css";

const cx = classNames.bind(styles);

export default function App() {
  return (
    <div className={cx("page")}>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Profile />
        <Contact />
      </main>
    </div>
  );
}
