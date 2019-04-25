// models/user.js

import knex from '../db/knex';

 //Querry to get all users from cpUser table
export const dbGetAllUsers = () => {
    return knex.raw(`SELECT idUser, username, firstname, lastname, email, DATE_FORMAT(userBirthDay, '%d.%m.%Y') as birthday FROM cpUser ORDER BY username`);
};

 //Querry to get a city from cpUser table
export const dbGetUserById = (id) => {
    return knex.raw(`SELECT idUser, username, firstname, lastname, email, DATE_FORMAT(userBirthDay, '%d.%m.%Y') as birthday FROM cpUser WHERE idUser =`+ id);
};

//Update a user from cpUser table
export const dbUpdateUser = (req, id) => {
  console.log(id + "====    ============"+req);
    return knex.update(req).returning('*').into('cpUser').where('idUser', id);
    console.log("========= = = = = = = = = == == = = =  =");

}
