// store/reducers/index.js

import { combineReducers } from 'redux';

import auth from './auth';
import account from './account';
import game from './game';
import club from './club';

const rootReducer = () => (
  combineReducers({
    auth,
    account,
    game,
    club,

  })
);

export default rootReducer;
