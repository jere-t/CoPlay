// models/user.js

import knex from '../db/knex';

 //Querry to get all users from cpUser table
export const dbGetAllUsers = () => {
    return knex.select().from('cpUser').orderBy('username');
};

//Querry to get all users from cpUser table
export const old_dbGetAllUsers = () => {
   return knex.raw(`SELECT idUser, username, firstname, lastname, email, DATE_FORMAT(userBirthDay, '%d.%m.%Y') as birthday FROM cpUser ORDER BY username`);
};

 //Querry to get a city from cpUser table
export const dbGetUserById = (id) => {
    return knex.from('cpUser').where('idUser', id).first();
};
//Querry to get a city from cpUser table
export const dbGetUserByUsername = (username) => {
   return knex.from('cpUser').where('username', username).first();
};

//Querry to get a city from cpUser table
export const old_dbGetUserById = (id) => {
   return knex.raw(`SELECT idUser, username, firstname, lastname, email, DATE_FORMAT(userBirthDay, '%d.%m.%Y') as birthday FROM cpUser WHERE idUser =`+ id);

};

//Querry to get a user for login from cpUser table
export const dbGetUserByUsernameAndIdClub = (username, idClub) => {
   return knex.from('cpUser')
         .leftJoin('cpIsMember', 'cpIsMember.fkUserIsM', '=', 'cpUser.idUser')
         .leftJoin('cpClub', 'cpIsMember.fkClubIsM', '=', 'cpClub.idClub')
         .options({ nestTables: true })
         .where({ idClub: idClub, username: username }).select().orderBy('nameClub');
};

//add an user from cpUser table
export const dbAddUser = (req) => {
    return knex.insert(req).into('cpUser');
}

//Update an user from cpUser table
export const dbUpdateUser = (req, id) => {
    return knex.update(req).into('cpUser').where('idUser', id);
}

//delete an user from cpUser table
export const dbDeleteUser = (id) => {
    return knex('cpUser').where('idUser', id).del();
};
