// models/game.js

//knex for querry builder
import knex from '../db/knex';
import moment from 'moment';

 //Querry to get all games from Game table
export const dbGetAllGames = () => {
    return knex.from('cpGame')
          .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
          .options({ nestTables: true })
          .select().orderBy('startDate');
};
 //Querry to get a game from Game table
export const dbGetGameById = (id) => {
    return knex.from('cpGame')
          .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
          .options({ nestTables: true })
          .where('idGame', id).first().select();
};
//Querry to get games from Game table with a date, club and a sport
export const dbGetAllGamesByAdvanceSearch = (date, idClub) => {
   return knex.from('cpGame')
         .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
         .options({ nestTables: true })
         .whereBetween('startDate', [date, moment(date).add(1, 'days').toDate()]).where({ fkClub: idClub}).select().orderBy('startDate');
};
//Querry to get games from Game table with a date, club and a sport
export const dbGetAllConnectGamesByAdvanceSearch = (date, idClub, idSport) => {
   return knex.from('cpGame')
         .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
         .leftJoin('cpUser', 'cpGame.fkUserCreator', '=', 'cpUser.idUser')
         .options({ nestTables: true })
         .whereBetween('startDate', [date, moment(date).add(1, 'days').toDate()])
         .where({ fkClub: idClub, fkSport: idSport, isPrivate: false})
         .select('cpGame.*', 'cpPlayground.*', 'cpUser.*')
         .orderBy('startDate');
};

//add a game from cpGame table
export const dbAddGame = (req) => {
    return knex.insert(req).into('cpGame');
}

export const dbCheckAvailable = (req) => {
    return knex.from('cpGame').count('idGame as existing').where({fkPlayground: req.fkPlayground, startDate: req.startDate}).first().select();
}

//Update a game from cpGame table
export const dbUpdateGame = (req, id) => {
    return knex.update(req).into('cpGame').where('idGame', id);
}

//delete a game from cpGame table
export const dbDeleteGame = (id) => {
    return knex('cpGame').where('idGame', id).del();
};
