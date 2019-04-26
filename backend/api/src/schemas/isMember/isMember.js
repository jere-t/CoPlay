// schemas/game/game.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
      User: Joi.object().keys({
        idUser: Joi.number().integer(),
        username: Joi.string(),
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email(),
        userBirthday: Joi.date().format('YYYY-MM-DD'),
      }),
      Club: Joi.object().keys({
        idClub: Joi.number().integer(),
        nameClub: Joi.string(),
        address: Joi.string(),
        fkCity: Joi.number().integer(),
      }),
      endSubsctiption: Joi.date().format('YYYY-MM-DD'),
      isAdmin: Joi.boolean(),
    });
