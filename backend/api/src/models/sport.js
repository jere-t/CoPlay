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
