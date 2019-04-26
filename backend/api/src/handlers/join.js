// handlers/join.js
import { dbGetAllJoins, dbGetAllJoinsByIdUser, dbGetAllJoinsByIdGame, dbAddJoin, dbUpdateJoin, dbDeleteJoin, dbGetNbPlayer, dbGetSingle } from '../models/join';

//Get all joins
export const getAllJoins = (request, reply) => {
    return dbGetAllJoins().then(data => {
        if (data == null) {
            return reply.response(JSON.stringify(
                {
                    "error": {
                        "error_type": "DATABASE_REQUIREMENTS",
                        "error_message": "no existing data!"
                    }
                }
            )).code(404);
        }
        else {
            return reply.response(data).code(200);
        }
    }).catch((error) => {
        console.log(error);
        return reply.response(JSON.stringify(
            {
                "error": {
                    "error_type": "DATABASE_ERROR",
                    "error_message": "Unspecified_server_error",
                    "inner_error": error.body
                }
            }
        )).code(500);
    });
}

//Get all joins by IdUser
export const getAllJoinsByIdUser = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetAllJoinsByIdUser(id).then(data => {
        if (data == null) {
            return reply.response(JSON.stringify(
                {
                    "error": {
                        "error_type": "DATABASE_REQUIREMENTS",
                        "error_message": "id doesn't exist!"
                    }
                }
            )).code(404);
        }
        else {
            return reply.response(data).code(200);
        }
    }).catch((error) => {
        console.log(error);
        return reply.response(JSON.stringify(
            {
                "error": {
                    "error_type": "DATABASE_ERROR",
                    "error_message": "Unspecified_server_error",
                    "inner_error": error.body
                }
            }
        )).code(500);
    });
}

//Get all joins by IdGame
export const getAllJoinsByIdGame = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetAllJoinsByIdGame(id).then(data => {
        if (data == null) {
            return reply.response(JSON.stringify(
                {
                    "error": {
                        "error_type": "DATABASE_REQUIREMENTS",
                        "error_message": "id doesn't exist!"
                    }
                }
            )).code(404);
        }
        else {
            return reply.response(data).code(200);
        }
    }).catch((error) => {
        console.log(error);
        return reply.response(JSON.stringify(
            {
                "error": {
                    "error_type": "DATABASE_ERROR",
                    "error_message": "Unspecified_server_error",
                    "inner_error": error.body
                }
            }
        )).code(500);
    });
}

//Add a new Join
export const addJoin = (request, reply) => {

    let req = request.payload;
    return dbGetNbPlayer(req).then(nbPlayer => {
      return dbGetSingle(req).then(single => {
        let nbAllowed = single.isSingle ? 2:4;
        console.log(nbPlayer.nbUser +" < "+nbAllowed);
        if (nbPlayer.nbUser < nbAllowed) {
          return dbAddJoin(req).then(data => {
              return reply.response(data).code(200);
          }).catch((error) => {
                  console.log("================= error: " + error.toString());
                  console.log("error.sqlMessage: " + error.sqlMessage);
                  if (error.errno == 1054) {
                      return reply.response(JSON.stringify(
                          {
                              "error": {
                                  "error_type": "DATABASE_ERROR",
                                  "error_message": "Bad parameter name",
                                  "db_message": error.sqlMessage
                              }
                          }
                      )).code(409);
                  } else {
                      return reply.response(JSON.stringify(
                          {
                              "error": {
                                  "error_type": "DATABASE_ERROR",
                                  "error_message": "Unspecified_server_error",
                                  "inner_error": error.body
                              }
                          }
                      )).code(500);
                  }
              });
        } else {
          return reply.response(JSON.stringify(
              {
                  "error": {
                      "error_type": "DATABASE_ERROR",
                      "error_message": "to many foreign keys",
                      "inner_error": "to many foreign keys for this game"
                  }
              }
          )).code(500);
        }
      }).catch((error) => {
              console.log("================= error: " + error.toString());
              console.log("error.sqlMessage: " + error.sqlMessage);
              if (error.errno == 1054) {
                  return reply.response(JSON.stringify(
                      {
                          "error": {
                              "error_type": "DATABASE_ERROR",
                              "error_message": "Bad parameter name",
                              "db_message": error.sqlMessage
                          }
                      }
                  )).code(409);
              } else {
                  return reply.response(JSON.stringify(
                      {
                          "error": {
                              "error_type": "DATABASE_ERROR",
                              "error_message": "Unspecified_server_error",
                              "inner_error": error.body
                          }
                      }
                  )).code(500);
              }
      });
    }).catch((error) => {
            console.log("================= error: " + error.toString());
            console.log("error.sqlMessage: " + error.sqlMessage);
            if (error.errno == 1054) {
                return reply.response(JSON.stringify(
                    {
                        "error": {
                            "error_type": "DATABASE_ERROR",
                            "error_message": "Bad parameter name",
                            "db_message": error.sqlMessage
                        }
                    }
                )).code(409);
            } else {
                return reply.response(JSON.stringify(
                    {
                        "error": {
                            "error_type": "DATABASE_ERROR",
                            "error_message": "Unspecified_server_error",
                            "inner_error": error.body
                        }
                    }
                )).code(500);
            }
    });
}

//Update Join
export const updateJoin = (request, reply) => {

    let req = request.payload;
    return dbUpdateJoin(req, req.fkUserJoin, req.fkClubJoin).then(data => {
      return reply.response(data).code(200);
    }).catch((error) => {
      if (error.errno == 1054) {
         return reply.response(JSON.stringify(
             {
                 "error": {
                     "error_type": "DATABASE_ERROR",
                     "error_message": "Bad parameter name",
                     "db_message": error.sqlMessage
                 }
             }
         )).code(409);
      } else {
        console.log(error.body);
         return reply.response(JSON.stringify(
             {
                 "error": {
                     "error_type": "DATABASE_ERROR",
                     "error_message": "Unspecified_server_error",
                     "inner_error": error.body
                 }
             }
         )).code(500);
      }
    });
}

//delete an isMember
export const deleteJoin = (request, reply) => {
    let idUser = parseInt(request.params.idUser);
    let idGame = parseInt(request.params.idGame);

    return dbDeleteJoin(idUser, idGame).then(data => {
        if (data == null) {
            return reply.response(JSON.stringify(
                {
                    "error": {
                        "error_type": "DATABASE_REQUIREMENTS",
                        "error_message": "id doesn't exist!"
                    }
                }
            )).code(404);
        }
        else {
            return reply.response(data).code(200);
        }
    }).catch((error) => {
        console.log(error);
        return reply.response(JSON.stringify(
            {
                "error": {
                    "error_type": "DATABASE_ERROR",
                    "error_message": "Unspecified_server_error",
                    "inner_error": error.body
                }
            }
        )).code(500);
    });
}
