import Link from 'next/link';
import styles from './MyAccount.module.css';

const MyAccountSettings = () => {

  return (
    <div className={styles.container}>
      <div className="item">
        <div className={styles.header}>Do you own a local business?</div>
        <div className={styles['click-text-item']}>
          <Link href="/createStore">
            <button className={styles['click-text']} type="button">
              Create Store Profile
            </button>
          </Link>
        </div>
      </div>
      <div className="item">
        <div className={styles.header}>Close Account</div>
        <ul className={styles.text}>
          <li>All your information will be erased.</li>
          <li>You will not be able to recover any of your information.</li>
        </ul>
        <div className={styles['click-text-item']}>
          <button className={styles['click-text']} type="button">
            Close Account
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .item {
            display: flex;
            flex-direction: column;
            align-self: center;
            align-items: center;
            width: 100%;
            margin: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default MyAccountSettings;
