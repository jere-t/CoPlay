// routes/join.js

//routes for table join
import { getAllJoins, getAllJoinsByIdUser, getAllJoinsByIdGame, addJoin, updateJoin, deleteJoin } from '../handlers/join';
const Joi = require('joi');
const joinSchema = require('../schemas/join/join');
const addJoinSchema = require('../schemas/join/add');
const updateJoinSchema = require('../schemas/join/update');

addJoinSchema

const join = [
  {
      method: 'GET',
      path: '/join/all',
      handler: getAllJoins,
      options: {
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all joins',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(joinSchema)
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
      path: '/join/user/{id}',
      handler: getAllJoinsByIdUser,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all joins with a specific idUser ',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(joinSchema)
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
      path: '/join/game/{id}',
      handler: getAllJoinsByIdGame,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all joins with a specific idGame ',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(joinSchema)
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
      method: 'POST',
      path: '/join',
      handler: addJoin,
      options:{
          validate:{
              payload: addJoinSchema,
              //Show error for debug
              failAction: (request, h, err) => {
                  throw err;
                  return;
              }
          },
          description: 'Create a new join',
          tags: ['api'], // ADD THIS TAG,
          plugins: {
              'hapi-swagger': {
                  // describe here all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(Joi.number().integer())
                      },
                      '400': {
                          'description': 'Bad Request',
                          'schema': Joi.object({
                              statusCode: 400,
                              error: 'Bad Request',
                              message: 'Invalid request params input'

                          })
                      },
                      '409':{
                          'description': 'Database error',
                          'schema': Joi.object({
                              error: Joi.object({
                                  error_type: 'DATABASE_ERROR',
                                  error_message: 'Bad parameter name',
                                  inner_error: '<ERROR_MESSAGE>'
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
      method: 'PUT',
      path: '/join',
      handler: updateJoin,
      options:{
          validate:{
              payload: updateJoinSchema,
              //Show error for debug
              failAction: (request, h, err) => {
                  throw err;
                  return;
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Update a Join',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(Joi.number().integer())
                      },
                      '400': {
                          'description': 'Bad Request',
                          'schema': Joi.object({
                              statusCode: 400,
                              error: 'Bad Request',
                              message: 'Invalid request params input'

                          })
                      },
                      '409':{
                          'description': 'Database error',
                          'schema': Joi.object({
                              error: Joi.object({
                                  error_type: 'DATABASE_ERROR',
                                  error_message: 'Bad parameter name',
                                  inner_error: '<ERROR_MESSAGE>'
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
      method: 'DELETE',
      path: '/join/{idUser}&{idGame}',
      handler: deleteJoin,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  idUser: Joi.number().integer().required(),
                  idGame: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],  // REQUIRED
          description: 'Delete a specific Join',
          plugins: {
              'hapi-swagger': {
                  // describe here all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': joinSchema
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
export default join;
