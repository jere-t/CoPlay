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

//add a Join from Join table
export const dbAddJoin = (req) => {
    return knex.insert(req).into('cpJoin');
}

//get nb player from a Join
export const dbGetNbPlayer = (req) => {
    return knex('cpJoin').count('fkUserJoin as nbUser').where('fkGameJoin', req.fkGameJoin).first().select();
}

//get single from Join table
export const dbGetSingle = (req) => {
    return knex.from('cpGame').where('idGame', req.fkGameJoin).first().select('isSingle');
}

//Update a Join from Join table
export const dbUpdateJoin = (req, idUser, idGame) => {
    return knex.update(req).into('cpJoin').where({fkUserJoin: idUser, fkGameJoin : idGame});
}

//delete a Join from Join table
export const dbDeleteJoin = (idUser, idGame) => {
    return knex('cpJoin').where({fkUserJoin: idUser, fkGameJoin : idGame}).del();
};
