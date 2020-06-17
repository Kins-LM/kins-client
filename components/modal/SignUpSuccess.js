import Link from 'next/link';
import styles from './SignUpForm.module.css';

const SignUpSuccess = () => {
  return (
    <div className={styles.form}>
      <h2 className="h2">You&apos;ve Signed Up Sucessfully.</h2>
      <p className="msg">We will send you an email to verify your email address.</p>

      <Link href="/marketplace">
        <p>Continue Shopping</p>
      </Link>

      <Link href="/add-business">
        <p>Add Your Business to the Marketplace</p>
      </Link>

      <style jsx>
        {`
          .h2 {
            font-size: 20px;
          }
          .msg {
            color: black;
          }
          p {
            text-align: center;
            color: blue;
          }
          button {
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default SignUpSuccess;
