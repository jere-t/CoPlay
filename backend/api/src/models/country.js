// models/country.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all countries from Country table
export const dbGetAllCountries = () => {
    return knex.select().from('cpCountry').orderBy('nameCountry');
};
 //Querry to get a country from Country table
export const dbGetCountryById = (id) => {
    return knex.from('cpCountry').where('idCountry', id).first();
};
