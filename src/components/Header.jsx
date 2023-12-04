import React from 'react';
import styles from './Header.module.scss';

function MenuBtn() {
  return (
    <div className={styles['menu-btn']}>
        <div className={`${styles['btn-top']} ${styles.btn}`}></div>
        <div className={`${styles['btn-bottom']} ${styles.btn}`}></div>
      </div>
  )
}

export default function Header() {

  return (
    <div className={styles.header}>
      <p>Aurélie BERNARD</p>
      <MenuBtn />
    </div>
  )
}
