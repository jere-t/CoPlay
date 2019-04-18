// models/isMember.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all isMembers from IsMember table
export const dbGetAllIsMembers = () => {
    return knex.from('cpIsMember')
          .leftJoin('cpUser', 'cpIsMember.fkUser', '=', 'cpUser.idUser')
          .leftJoin('cpClub', 'cpIsMember.fkClub', '=', 'cpClub.idClub')
          .options({ nestTables: true })
          .select().orderBy('nameClub');
};
 //Querry to get all isMembers from IsMember table with an idUser
export const dbGetAllIsMembersByIdUser = (id) => {
    return knex.from('cpIsMember')
          .leftJoin('cpUser', 'cpIsMember.fkUser', '=', 'cpUser.idUser')
          .leftJoin('cpClub', 'cpIsMember.fkClub', '=', 'cpClub.idClub')
          .options({ nestTables: true })
          .where('idUser', id).select().orderBy('nameClub');
};
//Querry to get all isMembers from IsMember table with an idClub
export const dbGetAllIsMembersByIdClub = (id) => {
   return knex.from('cpIsMember')
         .leftJoin('cpUser', 'cpIsMember.fkUser', '=', 'cpUser.idUser')
         .leftJoin('cpClub', 'cpIsMember.fkClub', '=', 'cpClub.idClub')
         .options({ nestTables: true })
         .where('idClub', id).select().orderBy('nameClub');
};
