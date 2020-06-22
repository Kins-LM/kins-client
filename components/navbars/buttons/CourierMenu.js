/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import {useEffect, useRef} from 'react';
import styles from './Menu.module.css';

const CourierMenu = () => {
  const buttonRef = useRef();
  const menuRef = useRef();

  const openMenu = () => {
    buttonRef.current.style.color = '#8bc7c9';
    buttonRef.current.nextSibling.style.display = 'flex';
  };

  const handleClick = e => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      menuRef.current.style.display = 'none';
      menuRef.current.previousSibling.style.color = '#000000';
    }
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      buttonRef.current.style.color = '#8bc7c9';
      buttonRef.current.nextSibling.style.display = 'flex';
    }
  };

  useEffect(() => {
    // using 'mousedown' prevents the modal from closing if user started click inside modal but ended outside
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div
      className={styles['menu-container']}
      onClick={openMenu}
      onMouseEnter={openMenu}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      <button ref={buttonRef} className={styles.button} type="button">
        Courier
      </button>
      <ul className={styles.menu} ref={menuRef}>
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
