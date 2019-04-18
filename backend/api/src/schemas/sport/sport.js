// schemas/sport/sport.js

const Joi = require('joi');

module.exports = Joi.object().keys(
    {
        idSport: Joi.number().integer(),
        nameSport: Joi.string(),
    });
