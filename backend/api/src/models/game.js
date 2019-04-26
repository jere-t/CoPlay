// models/game.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all games from Game table
export const dbGetAllGames = () => {
    return knex.from('cpGame')
          .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
          .options({ nestTables: true })
          .select().orderBy('startDate').orderBy('startTime');
};
 //Querry to get a game from Game table
export const dbGetGameById = (id) => {
    return knex.from('cpGame')
          .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
          .options({ nestTables: true })
          .where('idGame', id).first().select();
};
//Querry to get games from Game table with a date and a pg
export const dbGetAllGamesByAdvanceSearch = (date, idPlayground) => {
   return knex.from('cpGame')
         .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPg')
         .options({ nestTables: true })
         .where({ startDate: date, fkPlayground: idPlayground }).select().orderBy('startTime');
};

//add a game from cpGame table
export const dbAddGame = (req) => {
    return knex.insert(req).into('cpGame');
}

export const dbCheckAvailable = (req) => {
    return knex.from('cpGame').count('idGame as existing').where({fkPlayground: req.fkPlayground, startDate: req.startDate, startTime: req.startTime}).first().select();
}

//Update a game from cpGame table
export const dbUpdateGame = (req, id) => {
    return knex.update(req).into('cpGame').where('idGame', id);
}

//delete a game from cpGame table
export const dbDeleteGame = (id) => {
    return knex('cpGame').where('idGame', id).del();
};
