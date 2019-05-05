// models/sport.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all countries from Sport table
export const dbGetAllSports = () => {
    return knex.select().from('cpSport').orderBy('nameSport');
};
 //Querry to get a sport from Sport table
export const dbGetSportById = (id) => {
    return knex.from('cpSport').where('idSport', id).first();
};

//Querry to get all sports of a club
export const dbGetSportsOfAClub = (idClub) => {
   return knex.from('cpSport').distinct('nameSport')
   .leftJoin('cpPlayground', 'cpPlayground.fkSport', '=', 'cpSport.idSport')
   .options({ nestTables: true })
   .where({ fkClub: idClub }).select('idSport', 'nameSport');
};
