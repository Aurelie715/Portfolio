import React from "react";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <p>FR - EN</p>
      <p>ACCUEIL</p>
      <p>PORTFOLIO</p>
      <p>A PROPOS</p>
      <p>CONTACT</p>
    </div>
  );
}
