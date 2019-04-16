// models/city.js

//knex for querry builder
import knex from '../db/knex';

 //Querry to get all cities from City table
export const dbGetAllCities = () => {
    return knex.from('City')
          .leftJoin('Country', 'Country.idCountry', '=', 'City.fkCountry')
          .options({ nestTables: true })
          .select().orderBy('nameCountry').orderBy('nameCity');
};
 //Querry to get a city from City table
export const dbGetRoleTypeById = (id) => {
    return knex.from('City')
          .leftJoin('Country', 'Country.idCountry', '=', 'City.fkCountry')
          .options({ nestTables: true })
          .where('id', id).first().select();
};
