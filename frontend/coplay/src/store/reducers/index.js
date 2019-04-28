// store/reducers/index.js

import { combineReducers } from 'redux';

import auth from './auth';
import account from './account'

const rootReducer = () => (
  combineReducers({
    auth,
    account,

  })
);

export default rootReducer;
