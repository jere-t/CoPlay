// models/playground.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all playgrounds from Playground table
export const dbGetAllPlaygrounds = () => {
    return knex.from('cpPlayground')
          .leftJoin('cpClub', 'cpPlayground.fkClub', '=', 'cpClub.idClub')
          .leftJoin('cpSport', 'cpPlayground.fkSport', '=', 'cpSport.idSport')
          .leftJoin('cpCourtType', 'cpPlayground.fkCourtType', '=', 'cpCourtType.idCourtType')
          .options({ nestTables: true })
          .select().orderBy('nameSport').orderBy('nameClub').orderBy('nameCourt');
};
 //Querry to get a playground from Playground table
export const dbGetPlaygroundById = (id) => {
    return knex.from('cpPlayground')
          .leftJoin('cpClub', 'cpPlayground.fkClub', '=', 'cpClub.idClub')
          .leftJoin('cpSport', 'cpPlayground.fkSport', '=', 'cpSport.idSport')
          .leftJoin('cpCourtType', 'cpPlayground.fkCourtType', '=', 'cpCourtType.idCourtType')
          .options({ nestTables: true })
          .where('idPlayground', id).first().select();
};
//Querry to get all isMembers from IsMember table with an idClub
export const dbGetAllPlaygroundsByIdClub = (id) => {
   return knex.from('cpPlayground')
         .leftJoin('cpClub', 'cpPlayground.fkClub', '=', 'cpClub.idClub')
         .leftJoin('cpSport', 'cpPlayground.fkSport', '=', 'cpSport.idSport')
         .leftJoin('cpCourtType', 'cpPlayground.fkCourtType', '=', 'cpCourtType.idCourtType')
         .options({ nestTables: true })
         .where('idClub', id).select().orderBy('nameCourt');
};
//Querry to get all isMembers from IsMember table with an idClub and idSport
export const dbGetAllPlaygroundsByIdClubAndIdSport = (idClub, idSport) => {
   return knex.from('cpPlayground')
         .leftJoin('cpClub', 'cpPlayground.fkClub', '=', 'cpClub.idClub')
         .leftJoin('cpSport', 'cpPlayground.fkSport', '=', 'cpSport.idSport')
         .leftJoin('cpCourtType', 'cpPlayground.fkCourtType', '=', 'cpCourtType.idCourtType')
         .options({ nestTables: true })
         .where({ idClub: idClub, idSport: idSport }).select().orderBy('nameCourt');
};
