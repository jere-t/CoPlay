// schemas/city/city.js

const Joi = require('joi');

module.exports = Joi.object().keys(
    {
        idCity: Joi.number().integer(),
        nameCity: Joi.string(),
        idCountry: Joi.number().integer(),
        nameCountry: Joi.string(),
    });
