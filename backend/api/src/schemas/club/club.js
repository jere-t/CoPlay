// schemas/club/club.js

const Joi = require('joi');

module.exports = Joi.object().keys(
    {
        Club: Joi.object().keys({
          idClub: Joi.number().integer(),
          nameClub: Joi.string(),
          address: Joi.string(),
          City : Joi.object().keys({
            idCity: Joi.number().integer(),
            nameCity: Joi.string(),
            Country : Joi.object().keys({
              idCountry: Joi.number().integer(),
              nameCountry: Joi.string(),
            })
          })
        })
    });
