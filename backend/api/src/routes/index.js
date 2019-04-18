// routes/index.js
import user from './user';
import join from './join';
import game from './game';
import playground from './playground';
import club from './club';
import city from './city';
import country from './country';
import sport from './sport';
import courtType from './courtType';
import isMember from './isMember';

//concat every routes in one const
const routes = [].concat(user, join, game, playground, club, city, country, sport, courtType, isMember);

export default routes;
