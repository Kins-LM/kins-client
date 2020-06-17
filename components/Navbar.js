import {useState, useEffect, createRef, useRef} from 'react';
import Link from 'next/link';
import SignUpForm from './modal/SignUpForm';

const Navbar = () => {
  const signUpModal = useRef();
  const registerRef = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = e => {
    if (!signUpModal.current) {
      return;
    }
    if (
      !signUpModal.current.contains(e.target) &&
      !registerRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  const handleRegister = e => {
    e.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      {open ? <SignUpForm ref={signUpModal} /> : null}
      <div id="nav-bar">
        <img src="kins_logo1.svg" alt="logo" width="70" />
        <div id="nav-buttons">
          <button type="button">Log In</button>
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
