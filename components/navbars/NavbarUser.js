import {useState, useEffect, useRef} from 'react';
import CourierMenu from './buttons/CourierMenu';
import SellerStoreMenu from './buttons/SellerStoreMenu';
import styles from './Navbar.module.css';

const NavbarUser = () => {
  return (
    <div>
      <div className={styles['nav-bar']}>
        <img src="kins_logo1.svg" alt="logo" width="70" />
        <div className={styles['nav-buttons']}>
          <CourierMenu />
          <SellerStoreMenu />
          <div>
            <button
              className={styles.button}
              type="button"
              // onClick={}
            >
              My Account
            </button>
          </div>
          <div>
            <button
              className={styles.button}
              type="button"
              // onClick={}
            >
              Cart(icon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
