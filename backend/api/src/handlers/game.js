// handlers/game.js
import { dbGetAllGames, dbGetGameById, dbGetAllGamesByAdvanceSearch, dbGetAllConnectGamesByAdvanceSearch, dbAddGame, dbCheckAvailable, dbUpdateGame, dbDeleteGame } from '../models/game';

//Get all games
export const getAllGames = (request, reply) => {
    return dbGetAllGames().then(data => {
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

//Get a game by Id
export const getGameById = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetGameById(id).then(data => {
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

//Get all game by advance search
export const getAllGamesByAdvanceSearch = (request, reply) => {
    let date = request.params.date;
    let idClub = parseInt(request.params.idClub);
    return dbGetAllGamesByAdvanceSearch(date, idClub).then(data => {
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

//Get all game by advance search
export const getAllConnectGamesByAdvanceSearch = (request, reply) => {
    let date = request.params.date;
    let idClub = parseInt(request.params.idClub);
    let idSport = parseInt(request.params.idSport);
    return dbGetAllConnectGamesByAdvanceSearch(date, idClub, idSport).then(data => {
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

//Add a new game
export const addGame = (request, reply) => {

    let req = request.payload;
    return dbCheckAvailable(req).then(available => {
      if (available.existing > 0) {
        return reply.response(JSON.stringify(
          {
              "error": {
                  "error_type": "DATABASE_ERROR",
                  "error_message": "a game is already book at the same time for this playground",
                  "inner_error": error.body
              }
          }
        )).code(500);
      }
      return dbAddGame(req).then(data => {
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
          })
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

//Update game
export const updateGame = (request, reply) => {

    let req = request.payload;
    return dbUpdateGame(req, req.idGame).then(data => {
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

//delete an game
export const deleteGame = (request, reply) => {
    let idGame = parseInt(request.params.idGame);

    return dbDeleteGame(idGame).then(data => {
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
