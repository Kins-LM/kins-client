import {connect} from 'react-redux';

import NavbarAnon from './NavbarAnon';
import NavbarUser from './NavbarUser';

const Navbar = ({status}) => {
  const navbar = () => {
    const status = 'logged in';
    if (status === 'logged in') {
      return <NavbarUser />;
    }
    return <NavbarAnon />;
  };

  return <div>{navbar()}</div>;
};

const mapState = state => ({
  status: state.status,
  user: state.user
});

export default connect(mapState)(Navbar);
