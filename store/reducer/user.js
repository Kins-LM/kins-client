import axios from 'axios';

// initial State
const initialState = {};

// Action Types
const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';

// Action Creator
const gotSignIn = userData => {
  return {
    type: SIGN_IN,
    userData
  };
};
const gotSignUp = userData => {
  return {
    type: SIGN_UP,
    userData
  };
};

// Thunk Creator
export const signIn = userData => async dispatch => {
  try {
    const {data} = await axios.post(
      `http://localhost:8000/api/signin`,
      userData
    );
    dispatch(gotSignIn(data));
  } catch (error) {
    console.error(error);
  }
};
export const signUp = userData => async dispatch => {
  try {
    const {data} = await axios.post(
      `http://localhost:8000/api/signup`,
      userData
    );
    dispatch(gotSignUp(data));
  } catch (error) {
    console.error(error);
  }
};

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
