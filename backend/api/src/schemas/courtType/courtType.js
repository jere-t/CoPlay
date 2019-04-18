// schemas/courtType/courtType.js

const Joi = require('joi');

module.exports = Joi.object().keys(
    {
        idCourtType: Joi.number().integer(),
        courtType: Joi.string(),
        isIndoor: Joi.boolean(),
    });
