// models/city.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all cities from City table
export const dbGetAllCities = () => {
    return knex.from('cpCity')
          .leftJoin('cpCountry', 'cpCountry.idCountry', '=', 'cpCity.fkCountry')
          .options({ nestTables: true })
          .select().orderBy('nameCountry').orderBy('nameCity');
};
 //Querry to get a city from City table
export const dbGetCityById = (id) => {
    return knex.from('cpCity')
          .leftJoin('cpCountry', 'cpCountry.idCountry', '=', 'cpCity.fkCountry')
          .options({ nestTables: true })
          .where('idCity', id).first().select();
};
