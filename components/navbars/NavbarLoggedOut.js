import {useState, useEffect, useRef} from 'react';
import SignInForm from '../modal/SignInForm';
import SignUpForm from '../modal/SignUpForm';
import styles from './Navbar.module.css';

const NavbarLoggedOut = () => {
  const signInModal = useRef();
  const signInRef = useRef();
  const signUpModal = useRef();
  const registerRef = useRef();
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleClick = e => {
    if (
      signInModal.current &&
      !signInModal.current.contains(e.target) &&
      !signInRef.current.contains(e.target)
    ) {
      setOpenSignIn(false);
    }
    if (
      signUpModal.current &&
      !signUpModal.current.contains(e.target) &&
      !registerRef.current.contains(e.target)
    ) {
      setOpenRegister(false);
    }
  };

  const handleSignIn = e => {
    e.preventDefault();
    setOpenSignIn(true);
  };
  const handleRegister = e => {
    e.preventDefault();
    setOpenRegister(true);
  };

  useEffect(() => {
    // using 'mousedown' prevents the modal from closing if user started click inside modal but ended outside
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div>
      {openSignIn ? <SignInForm ref={signInModal} /> : null}
      {openRegister ? <SignUpForm ref={signUpModal} /> : null}
      <div className={styles['nav-bar']}>
        <img src="kins_logo1.svg" alt="logo" width="70" />
        <div className="nav-buttons">
          <button
            className={styles.button}
            type="button"
            ref={signInRef}
            onClick={handleSignIn}
          >
            Log In
          </button>
          <button
            className={styles.button}
            type="button"
            ref={registerRef}
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarLoggedOut;
