// store/reducers/index.js

import { combineReducers } from 'redux';

import auth from './auth';
import account from './account';
import game from './game';
import join from './join';
import club from './club';
import sport from './sport';
import playground from './playground';

const rootReducer = () => (
  combineReducers({
    auth,
    account,
    game,
    join,
    club,
    sport,
    playground,

  })
);

export default rootReducer;
