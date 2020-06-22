import {useState, useEffect, useRef} from 'react';

import styles from '../Navbar.module.css';

const SellerStoreMenu = () => {
  return (
    <div>
      <button
        className={styles.button}
        type="button"
        // onClick={}
      >
        My Store
      </button>
    </div>
  );
};

export default SellerStoreMenu;
