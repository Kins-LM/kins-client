import axios from 'axios';

// initial State
const initialState = {};

// Action Types
const SIGN_UP = 'SIGN_UP';

// Action Creator
const gotSignUp = userData => {
  return {
    type: SIGN_UP,
    userData
  };
};

// Thunk Creator
export const signUp = userData => async dispatch => {
  try {
    const {data} = await axios.post(`/api/signup`, userData);
    dispatch(gotSignUp(data));
  } catch (error) {
    console.error(error);
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      return action.userData;
    }
    default:
      return state;
  }
};

export default userReducer;
