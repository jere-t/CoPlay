// schemas/game/game.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
      fkUserJoin: Joi.number().integer().required(),
      fkGameJoin: Joi.number().integer().required(),
    });
