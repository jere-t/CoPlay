// schemas/playground/playground.js

const Joi = require('joi');

module.exports = Joi.object().keys(
    {
      Playground : Joi.object().keys({
        idPlayground: Joi.number().integer(),
        Club: Joi.object().keys({
          idClub: Joi.number().integer(),
          nameClub: Joi.string(),
          address: Joi.string(),
          fkCity: Joi.number().integer(),
        }),
        Sport: Joi.object().keys({
          idSport: Joi.number().integer(),
          nameSport: Joi.string(),
        }),
        CourtType: Joi.object().keys({
          idCourtType: Joi.number().integer(),
          courtType: Joi.string(),
          isIndoor: Joi.boolean(),
        }),
        nameCourt: Joi.string(),
        isDoubleOk: Joi.boolean(),
      })
    });
