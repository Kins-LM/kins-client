/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import {useRef} from 'react';
import styles from './NavbarMenu.module.css';
import {openMenu, closeMenu, handleClick, uE} from './navbarMenuUtil';

const CourierMenu = ({componentName, menuLinks, linkRoutes}) => {
  const buttonRef = useRef();
  const menuRef = useRef();
  uE(buttonRef, menuRef);

  const createLI = () => {
    return menuLinks.map((link, i) => {
      return (
        <li key={link} className={styles.li}>
          <Link href={{pathname: linkRoutes[i]}}>
            <a className={styles.a}>{link}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div
      className={styles['menu-container']}
      onClick={() => openMenu(buttonRef)}
      onMouseEnter={() => openMenu(buttonRef)}
      onMouseLeave={() => closeMenu(buttonRef)}
      onKeyPress={e => handleClick(e, buttonRef, menuRef)}
      role="button"
      tabIndex={0}
    >
      <button ref={buttonRef} className={styles.button} type="button">
        {componentName}
      </button>
      <ul className={styles.menu} ref={menuRef}>
        {createLI()}
      </ul>
    </div>
  );
};

export default CourierMenu;
