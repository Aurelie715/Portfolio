import React from "react";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <p>FR - EN</p>
      <ul>
        <li>ACCUEIL</li>
        <li>PORTFOLIO</li>
        <li>A PROPOS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
