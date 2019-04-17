// models/club.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all clubs from Club table
export const dbGetAllClubs = () => {
    return knex.from('cpClub')
          .leftJoin('cpCity', 'cpCity.idCity', '=', 'cpClub.fkCity')
          .leftJoin('cpCountry', 'cpCountry.idCountry', '=', 'cpCity.fkCountry')
          .options({ nestTables: true })
          .select().orderBy('nameCountry').orderBy('nameClub');
};
 //Querry to get a club from Club table
export const dbGetClubById = (id) => {
    return knex.from('cpClub')
          .leftJoin('cpCity', 'cpCity.idCity', '=', 'cpClub.fkCity')
          .leftJoin('cpCountry', 'cpCountry.idCountry', '=', 'cpCity.fkCountry')
          .options({ nestTables: true })
          .where('idClub', id).first().select();
};
