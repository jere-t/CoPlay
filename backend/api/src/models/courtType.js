// models/courtType.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all courtTypes from CourtType table
export const dbGetAllCourtTypes = () => {
    return knex.select().from('cpCourtType').orderBy('courtType');
};
 //Querry to get a courtType from CourtType table
export const dbGetCourtTypeById = (id) => {
    return knex.from('cpCourtType').where('idCourtType', id).first();
};
