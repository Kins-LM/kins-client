import {} from 'react';
import {connect} from 'react-redux';

import styles from './Navbar.module.css';
import NavbarLoggedOut from './NavbarLoggedOut';

const Navbar = ({status}) => {
  const navbar = () => {
    switch (status) {
      case 'shopper': {
        return null;
      }
      case 'seller': {
        return null;
      }
      case 'courier': {
        return null;
      }
      default:
        return <NavbarLoggedOut />;
    }
  };

  return <div>{navbar()}</div>;
};

const mapState = state => ({
  status: state.status,
  user: state.user
});

export default connect(mapState)(Navbar);
