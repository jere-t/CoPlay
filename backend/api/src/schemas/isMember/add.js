// schemas/game/game.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
      fkUserIsM: Joi.number().integer().required(),
      fkClubIsM: Joi.number().integer().required(),
      endSubsctiption: Joi.date().format('YYYY-MM-DD').required(),
      isAdmin: Joi.boolean().required(),
    });
