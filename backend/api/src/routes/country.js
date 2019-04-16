// routes/country.js

//routes for table country
import { getAllCountries, getCountryById } from '../handlers/country';
const Joi = require('joi');
const countrySchema = require('../schemas/country/country');

const country = [
  {
      method: 'GET',
      path: '/country/all',
      handler: getAllCountries,
      options: {
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all countries',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(countrySchema)
                      },
                      '404': {
                          'description': 'Not Found',
                          'schema': Joi.object({
                              error: Joi.object({
                                  error_type: 'DATABASE_REQUIREMENTS',
                                  error_message: 'No existing data'
                              }),
                          })
                      },
                      '500': {
                          'description': 'Internal server error',
                          'schema': Joi.object({
                              error: Joi.object({
                                  error_type: 'SERVER_ERROR',
                                  error_message: 'Unspecified_server_error',
                                  inner_error: '<ERROR_MESSAGE>'
                              }),
                          })
                      }
                  }
              }
          },
      }
  },
  {
      method: 'GET',
      path: '/country/{id}',
      handler: getCountryById,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],  // REQUIRED
          description: 'Get a specific country by using its id',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': countrySchema
                      },
                      '400': {
                          'description': 'Bad Request',
                          'schema': Joi.object({
                              error: Joi.object({
                                  statusCode: '400',
                                  error: 'Bad Request',
                                  message: 'Invalid request params input'
                              }),
                          })
                      },
                      '404': {
                          'description': 'Not Found',
                          'schema': Joi.object({
                              error: Joi.object({
                                  error_type: 'DATABASE_REQUIREMENTS',
                                  error_message: 'id doesn\'t exist'
                              }),
                          })
                      },
                      '500': {
                          'description': 'Internal server error',
                          'schema': Joi.object({
                              error: Joi.object({
                                  error_type: 'SERVER_ERROR',
                                  error_message: 'Unspecified_server_error',
                                  inner_error: '<ERROR_MESSAGE>'
                              }),
                          })
                      }
                  }
              }
          },
      }
  }
];
export default country;
