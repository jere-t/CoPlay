// models/join.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all joins from Join table
export const dbGetAllJoins = () => {
    return knex.from('cpJoin')
          .leftJoin('cpUser', 'cpJoin.fkUserJoin', '=', 'cpUser.idUser')
          .leftJoin('cpGame', 'cpJoin.fkGameJoin', '=', 'cpGame.idGame')
          .options({ nestTables: true })
          .select().orderBy('startDate').orderBy('startTime');
};

//Querry to get all joins from Join table with a idUser
export const dbGetAllJoinsByIdUser = (id) => {
   return knex.from('cpJoin')
         .leftJoin('cpUser', 'cpJoin.fkUserJoin', '=', 'cpUser.idUser')
         .leftJoin('cpGame', 'cpJoin.fkGameJoin', '=', 'cpGame.idGame')
         .options({ nestTables: true })
         .where('idUser', id).select().orderBy('startTime');
};
//Querry to get all joins from Join table with a idGame
export const dbGetAllJoinsByIdGame = (id) => {
  return knex.from('cpJoin')
        .leftJoin('cpUser', 'cpJoin.fkUserJoin', '=', 'cpUser.idUser')
        .leftJoin('cpGame', 'cpJoin.fkGameJoin', '=', 'cpGame.idGame')
        .options({ nestTables: true })
        .where('idGame', id).select().orderBy('startTime');
};
