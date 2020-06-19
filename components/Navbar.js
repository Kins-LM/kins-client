import {useState, useEffect, useRef} from 'react';
import SignInForm from './modal/SignInForm';
import SignUpForm from './modal/SignUpForm';

const Navbar = () => {
  const signInModal = useRef();
  const signInRef = useRef();
  const signUpModal = useRef();
  const registerRef = useRef();
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleClick = e => {
    // TODO: clean this up
    if (!signUpModal.current) {
      return;
    }
    if (
      !signUpModal.current.contains(e.target) &&
      !registerRef.current.contains(e.target)
    ) {
      setOpenRegister(false);
    }
    if (!signInModal.current) {
      return;
    }
    if (
      !signInModal.current.contains(e.target) &&
      !signInRef.current.contains(e.target)
    ) {
      setOpenSignIn(false);
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
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      {openSignIn ? <SignInForm ref={signInModal} /> : null}
      {openRegister ? <SignUpForm ref={signUpModal} /> : null}
      <div id="nav-bar">
        <img src="kins_logo1.svg" alt="logo" width="70" />
        <div id="nav-buttons">
          <button type="button" ref={signInRef} onClick={handleSignIn}>
            Log In
          </button>
          <button type="button" ref={registerRef} onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
      <style jsx>
        {`
          #nav-bar {
            padding: 20px 20px 20px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          button {
            background-color: transparent;
            border: none;
            transition-duration: 0.4s;
          }
          button:hover {
            color: pink;
          }
          button:focus,
          button:active {
            color: blue;
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
