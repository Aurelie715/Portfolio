import React, { useState } from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu";

function MenuBtn({ onClick, isOpen }) {
  return (
    <div className={styles["menu-btn"]} onClick={onClick}>
      <div className={isOpen ? styles.open : ""}></div>
      <div className={isOpen ? styles.open : ""}></div>
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? styles["header-container"] : ""}>
      <div className={styles.header}>
        <p>Aurélie BERNARD</p>
        <MenuBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen ? <Menu /> : null}
    </header>
  );
}
