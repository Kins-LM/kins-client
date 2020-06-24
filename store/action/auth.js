import axios from 'axios';
// Action Types
import * as auth from './authConstants';

// TODO: loading and error property

// Action Creator
const gotSignIn = loading => {
  return {
    type: auth.SIGN_IN,
    loading
  };
};
const gotSignInSuccess = userData => {
  return {
    type: auth.SIGN_IN_SUCCESS,
    userData
  };
};
const gotSignInError = error => {
  return {
    type: auth.SIGN_IN_ERROR,
    error
  };
};

const gotSignUp = loading => {
  return {
    type: auth.SIGN_UP,
    loading
  };
};
const gotSignUpSuccess = userData => {
  return {
    type: auth.SIGN_UP_SUCCESS,
    userData
  };
};
const gotSignUpError = error => {
  return {
    type: auth.SIGN_UP_ERROR,
    error
  };
};

const gotSignOut = loading => {
  return {
    type: auth.SIGN_OUT,
    loading
  };
};
const gotSignOutSuccess = userData => {
  return {
    type: auth.SIGN_OUT_SUCCESS,
    userData
  };
};
const gotSignOutError = error => {
  return {
    type: auth.SIGN_OUT_ERROR,
    error
  };
};

// Thunk Creator
export const signIn = userData => async dispatch => {
  dispatch(gotSignIn(true))
  try {
    const {data} = await axios.post(
      `http://localhost:8000/api/signin`,
      userData
    );
    dispatch(gotSignInSuccess(data));
  } catch (error) {
    dispatch(gotSignInError(error));
  }
};

export const signUp = userData => async dispatch => {
  dispatch(gotSignUp(true))
  try {
    const {data} = await axios.post(
      `http://localhost:8000/api/signup`,
      userData
    );
    dispatch(gotSignUpSuccess(data));
  } catch (error) {
    dispatch(gotSignUpError(error));
  }
};

export const signOut = () => async dispatch => {
  dispatch(gotSignOut(true));
  try {
    const {data} = await axios.get(`http://localhost:8000/api/signout`);
    dispatch(gotSignOutSuccess(data));
  } catch (error) {
    dispatch(gotSignOutError(error));
  }
};
