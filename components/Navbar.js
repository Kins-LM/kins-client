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
    // e.stopPropagation();
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
      <div id="nav-bar">
        <img src="kins_logo1.svg" alt="logo" width="70" />
        <div id="links">
          <Link href="/">
            <button type="button">Log In</button>
          </Link>
          <button type="button" ref={registerRef} onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
      {open ? <SignUpForm ref={signUpModal} open={open} /> : null}
      <style jsx>
        {`
          #nav-bar {
            display: flex;
            justify-content: space-between;
          }
          links {
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
