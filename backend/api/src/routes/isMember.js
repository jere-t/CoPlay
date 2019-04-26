// routes/isMember.js

//routes for table isMember
import { getAllIsMembers, getAllIsMembersByIdUser, getAllIsMembersByIdClub, getAllIsMembersByIdUserIdClub, addIsMember, updateIsMember, deleteIsMember} from '../handlers/isMember';
const Joi = require('joi');
const isMemberSchema = require('../schemas/isMember/isMember');
const addIsMemberSchema = require('../schemas/isMember/add');
const updateIsMemberSchema = require('../schemas/isMember/update');

const isMember = [
  {
      method: 'GET',
      path: '/ismember/all',
      handler: getAllIsMembers,
      options: {
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all isMembers',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(isMemberSchema)
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
      path: '/ismember/user/{id}',
      handler: getAllIsMembersByIdUser,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all isMembers with a specific idUser ',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(isMemberSchema)
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
      path: '/ismember/club/{id}',
      handler: getAllIsMembersByIdClub,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  id: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all isMembers with a specific idClub ',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(isMemberSchema)
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
      path: '/ismember/{idUser}&{idClub}',
      handler: getAllIsMembersByIdUserIdClub,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  idUser: Joi.number().integer().required(),
                  idClub: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Get the list of all isMembers with a specific idUser and idClub',
          plugins: {
              'hapi-swagger': {
                  // description of all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': Joi.array().items(isMemberSchema)
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
      path: '/ismember',
      handler: addIsMember,
      options:{
          validate:{
              payload: addIsMemberSchema,
              //Show error for debug
              failAction: (request, h, err) => {
                  throw err;
                  return;
              }
          },
          description: 'Create a new isMember',
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
      path: '/ismember',
      handler: updateIsMember,
      options:{
          validate:{
              payload: updateIsMemberSchema,
              //Show error for debug
              failAction: (request, h, err) => {
                  throw err;
                  return;
              }
          },
          // API Documentation Generation
          tags: ['api'],
          description: 'Update a IsMember',
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
      path: '/ismember/{idUser}&{idClub}',
      handler: deleteIsMember,
      options: {
          // JOI validation for the request
          validate: {
              params: {
                  idUser: Joi.number().integer().required(),
                  idClub: Joi.number().integer().required()
              }
          },
          // API Documentation Generation
          tags: ['api'],  // REQUIRED
          description: 'Delete a specific IsMember',
          plugins: {
              'hapi-swagger': {
                  // describe here all possible responses provided by the API with their HTTP code
                  responses: {
                      '200': {
                          'description': 'Success',
                          'schema': isMemberSchema
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
export default isMember;
