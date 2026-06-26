import type { ReactElement } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Work from "./Work";
import Profile from "./Profile";
import Contact from "./Contact";
import styles from "./App.module.css";

export default function App(): ReactElement {
  return (
    <div className={styles.page}>
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
