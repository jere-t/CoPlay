// schemas/city/city.js

const Joi = require('joi');

module.exports = Joi.object().keys(
    {
        City : Joi.object().keys({
          idCity: Joi.number().integer(),
          nameCity: Joi.string(),
          Country : Joi.object().keys({
            idCountry: Joi.number().integer(),
            nameCountry: Joi.string(),
          })
        })
    });
