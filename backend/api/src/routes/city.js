// routes/city.js

//routes for table city
import { getAllCities, getCityById } from '../handlers/city';
const Joi = require('joi');
const citySchema = require('../schemas/city/city');

const city = [
  {
      method: 'GET',
      path: '/city/all',
      handler: getAllCities,
      options: {
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all cities',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(citySchema)
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
      path: '/city/{id}',
      handler: getCityById,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],  // REQUIRED
          description: 'Get a specific city by using its id',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': citySchema
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
export default city;
