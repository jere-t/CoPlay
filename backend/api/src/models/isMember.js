// models/isMember.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all isMembers from IsMember table
export const dbGetAllIsMembers = () => {
    return knex.from('cpIsMember')
          .leftJoin('cpUser', 'cpIsMember.fkUserIsM', '=', 'cpUser.idUser')
          .leftJoin('cpClub', 'cpIsMember.fkClubIsM', '=', 'cpClub.idClub')
          .options({ nestTables: true })
          .select().orderBy('nameClub');
};
 //Querry to get all isMembers from IsMember table with an idUser
export const dbGetAllIsMembersByIdUser = (id) => {
    return knex.from('cpIsMember')
          .leftJoin('cpUser', 'cpIsMember.fkUserIsM', '=', 'cpUser.idUser')
          .leftJoin('cpClub', 'cpIsMember.fkClubIsM', '=', 'cpClub.idClub')
          .options({ nestTables: true })
          .where('idUser', id).select().orderBy('nameClub');
};
//Querry to get all isMembers from IsMember table with an idUser and idClub
export const dbGetAllIsMembersByIdUserIdClub = (idUser, idClub) => {
   return knex.from('cpIsMember')
         .leftJoin('cpUser', 'cpIsMember.fkUserIsM', '=', 'cpUser.idUser')
         .leftJoin('cpClub', 'cpIsMember.fkClubIsM', '=', 'cpClub.idClub')
         .options({ nestTables: true })
         .where({idUser: idUser, idClub : idClub}).first().select();
};
//Querry to get all isMembers from IsMember table with an idClub
export const dbGetAllIsMembersByIdClub = (id) => {
   return knex.from('cpIsMember')
         .leftJoin('cpUser', 'cpIsMember.fkUserIsM', '=', 'cpUser.idUser')
         .leftJoin('cpClub', 'cpIsMember.fkClubIsM', '=', 'cpClub.idClub')
         .options({ nestTables: true })
         .where('idClub', id).select().orderBy('nameClub');
};

//add an IsMember from cpIsMember table
export const dbAddIsMember = (req) => {
    return knex.insert(req).into('cpIsMember');
}

//Update an IsMember from cpIsMember table
export const dbUpdateIsMember = (req, idUser, idClub) => {
    return knex.update(req).into('cpIsMember').where({fkUserIsM: idUser, fkClubIsM : idClub});
}

//delete an IsMember from cpIsMember table
export const dbDeleteIsMember = (idUser, idClub) => {
    return knex('cpIsMember').where({fkUserIsM: idUser, fkClubIsM : idClub}).del();
};
