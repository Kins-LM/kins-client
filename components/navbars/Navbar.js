import {connect} from 'react-redux';

import NavbarAnonymous from './NavbarAnonymous';
import NavbarUser from './NavbarUser';

const Navbar = ({auth}) => {
  const navbar = () => {
    if (auth) {
      return <NavbarUser />;
    }
    return <NavbarAnonymous />;
  };

  return <div>{navbar()}</div>;
};

const mapState = state => ({
  auth: state.auth.user
});

export default connect(mapState)(Navbar);
