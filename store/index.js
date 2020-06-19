import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunkMiddleWare from 'redux-thunk';

import userReducer from './reducer/user';

const reducer = combineReducers({
  user: userReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

export default store;
