import {useState} from 'react';
import Link from 'next/link';
import SignUpForm from './modal/SignUpForm';

const Navbar = () => {
  const [open, setopen] = useState(false);

  const toggleSignUp = e => {
    e.stopPropagation();
    e.preventDefault();
    setopen(!open);
    console.log('button', open)
  };

  return (
    <div>
      <img src="kins_logo1.svg" alt="logo" width="70" />
      <Link href="/">
        <button type="button">Log In</button>
      </Link>

      <button type="button" onClick={toggleSignUp}>
        Register
      </button>
      <SignUpForm open={open} />
      <style jsx>{``}</style>
    </div>
  );
};

export default Navbar;
