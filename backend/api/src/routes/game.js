// routes/game.js

//routes for table game
import { getAllGames, getGameById, getAllGamesByAdvanceSearch, addGame, updateGame, deleteGame } from '../handlers/game';
//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
const gameSchema = require('../schemas/game/game');
const addGameSchema = require('../schemas/game/add');
const updateGameSchema = require('../schemas/game/update');

const game = [
  {
      method: 'GET',
      path: '/game/all',
      handler: getAllGames,
      options: {
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all games',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(gameSchema)
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
      path: '/game/{id}',
      handler: getGameById,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],  // REQUIRED
          description: 'Get a specific game by using its id',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': gameSchema
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
  },
  {
      method: 'GET',
      path: '/game/advance/{date}&{idClub}',
      handler: getAllGamesByAdvanceSearch,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  date: Joi.date().format('YYYY-MM-DD'),
                  idClub: Joi.number().integer()
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all games with a advance search ',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(gameSchema)
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
      path: '/game',
      handler: addGame,
      options:{
          validate:{
              payload: addGameSchema,
              //Show error for debug
              failAction: (request, h, err) => {
                  throw err;
                  return;
              }
          },
          description: 'Create a new game',
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
      path: '/game',
      handler: updateGame,
      options:{
          validate:{
              payload: updateGameSchema,
              //Show error for debug
              failAction: (request, h, err) => {
                  throw err;
                  return;
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Update a game',
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
      path: '/game/{id}',
      handler: deleteGame,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  idGame: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],  // REQUIRED
          description: 'Delete a specific game',
          plugins: {
              'hapi-swagger': {
                  // describe here all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': gameSchema
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
export default game;
