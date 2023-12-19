import React, {useState} from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu";

function MenuBtn({onClick, isOpen}) {
  console.log(isOpen)
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
    <>
    <div className={isOpen ? `${styles["header-menu"]} ${styles.header}` : styles.header}>
      <p>Aurélie BERNARD</p>
      <MenuBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
      <Menu/>
    </div>
    
    </>
    
  );
}
