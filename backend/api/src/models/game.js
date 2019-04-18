// models/game.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all games from Game table
export const dbGetAllGames = () => {
    return knex.from('cpGame')
          .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPlayground')
          .options({ nestTables: true })
          .select().orderBy('startDate').orderBy('startTime');
};
 //Querry to get a game from Game table
export const dbGetGameById = (id) => {
    return knex.from('cpGame')
          .leftJoin('cpPlayground', 'cpGame.fkPlayground', '=', 'cpPlayground.idPlayground')
          .options({ nestTables: true })
          .where('idGame', id).first().select();
};
