import Router from 'next/router';
import {connect} from 'react-redux';
import {signOut} from '../store/action/auth';

const Logout = ({signOutThunk}) => {
  const logout = () => {
    signOutThunk();
    Router.push('/');
  };
  logout();
  return null;
};

const mapDispatch = dispatch => ({
  signOutThunk: () => dispatch(signOut())
});

export default connect(null, mapDispatch)(Logout);
