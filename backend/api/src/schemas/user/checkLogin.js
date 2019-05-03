// schemas/user/checkLogin.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
        username: Joi.string().max(100).min(2).required(),
        passwordHash: Joi.string().max(255).min(2).required(),
        idClub: Joi.number().integer().required(),
    });
