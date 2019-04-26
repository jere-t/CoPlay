// schemas/game/game.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
      idGame: Joi.number().integer().required(),
      fkPlayground: Joi.number().integer().required(),
      isSingle: Joi.boolean().required(),
      isPrivate: Joi.boolean().required(),
      duration: Joi.number().integer().required(),
      startDate: Joi.date().format('YYYY-MM-DD').required(),
      startTime: Joi.date().format('HH:mm').required(),
    });
