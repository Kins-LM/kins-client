import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunkMiddleWare from 'redux-thunk';

import authReducer from './reducer/auth';
// import navbarReducer from './reducer/navbar';

const reducer = combineReducers({
  auth: authReducer,
  // navbar: navbarReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

export default store;
