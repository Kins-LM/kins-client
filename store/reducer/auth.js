import * as auth from '../action/authConstants';

// initial State
const initialState = {user: null, loading: false, error: null};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.SIGN_IN: {
      return {loading: action.loading};
    }
    case auth.SIGN_IN_SUCCESS: {
      return {user: action.userData, error: null};
    }
    case auth.SIGN_IN_ERROR: {
      console.log(action.error);
      return {error: action.error};
    }
    case auth.SIGN_UP: {
      return {loading: action.loading};
    }
    case auth.SIGN_UP_SUCCESS: {
      return {user: action.userData, error: null};
    }
    case auth.SIGN_UP_ERROR: {
      console.log('reducer err', action.error);
      return {error: action.error};
    }
    case auth.SIGN_OUT: {
      return {loading: action.loading};
    }
    case auth.SIGN_OUT_SUCCESS: {
      return {user: null, error: null};
    }
    case auth.SIGN_OUT_ERROR: {
      return {error: action.error};
    }
    default:
      return state;
  }
};

export default userReducer;
