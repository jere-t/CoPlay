// models/country.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all countries from Country table
export const dbGetAllCountries = () => {
    return knex.select().from('Country').orderBy('nameCountry');
};
 //Querry to get a country from Country table
export const dbGetRoleTypeById = (id) => {
    return knex.from('Country').where('id', id).first();
};
