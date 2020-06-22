import {} from 'react';
import {connect} from 'react-redux';

import styles from './Navbar.module.css';
import NavbarAnon from './NavbarAnon';
import NavbarUser from './NavbarUser';

const Navbar = ({status}) => {
  const navbar = () => {
    switch (status) {
      case 'logged in': {
        return <NavbarAnon />;
      }
      case 'logged out': {
        return <NavbarUser />;
      }
      default:
        return <NavbarUser />;
        // return <NavbarAnon />;
    }
  };

  return <div>{navbar()}</div>;
};

const mapState = state => ({
  status: state.status,
  user: state.user
});

export default connect(mapState)(Navbar);
