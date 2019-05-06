// schemas/game/game.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
      fkPlayground: Joi.number().integer().required(),
      fkUserCreator: Joi.number().integer().required(),
      isSingle: Joi.boolean().required(),
      isPrivate: Joi.boolean().required(),
      duration: Joi.number().integer().required(),
      startDate: Joi.date().required(),
      description: Joi.string(),
    });
