/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react';
import styles from './Menu.module.css';

const CourierMenu = () => {
  const handleClick = () => {
    // TODO: hover doesn't address click(mobile users won't hover?)
  };
  return (
    <div className={styles.menu}>
      <button className={styles.button} type="button" onClick={handleClick}>
        Courier
      </button>
      <ul className={styles['menu-content']}>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.a}>New Orders</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.a}>In Progress</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.a}>Completed Orders</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CourierMenu;
