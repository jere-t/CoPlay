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
const routes = [].concat(user, club, city, country);

console.log("Following routes are defined in the RESTfull api:");
console.log(routes);

export default routes;
