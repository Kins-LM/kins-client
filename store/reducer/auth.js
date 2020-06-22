import {SIGN_IN, SIGN_UP} from '../action/auth';

// initial State
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return action.userData;
    }
    case SIGN_UP: {
      return action.userData;
    }
    default:
      return state;
  }
};

export default userReducer;
