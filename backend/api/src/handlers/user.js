// handlers/club.js
import { dbGetAllUsers, dbGetUserById, dbGetUserByUsername, dbGetUserByUsernameAndIdClub, dbAddUser, dbUpdateUser, dbDeleteUser } from '../models/user';
import bcrypt from 'bcryptjs';

//Get all clubs
export const getAllUsers = (request, reply) => {
    return dbGetAllUsers().then(data => {
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

//Get an user by Id
export const getUserById = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetUserById(id).then(data => {
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

//Get an user by username
export const getUserByUsername = (request, reply) => {
    let username = request.params.username;
     return dbGetUserByUsername(username).then(data => {
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

//Get an user by username & IdClub For LOGIN
export const getUserByUsernameAndIdClub = (username, idClub) => {
    //let username = request.params.username
    //let id = parseInt(request.params.idClub);
     return dbGetUserByUsernameAndIdClub(username, idClub).then(data => {
        if (data == null || data.length < 1) {
            return null;
        }
        else {
            return data;
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
//error 404 bad username & error 500 ==> bad password
export const checkLogin = (request, reply) => {
    console.log(request);
    let username = request.params.username;
    let req = request.payload;
    return getUserByUsernameAndIdClub(req.username, req.idClub).then(data => {
      if (data == null) {
          return reply.response(JSON.stringify(
              {
                  "error": {
                      "error_type": "DATABASE_REQUIREMENTS",
                      "error_message": "username doesn't exist for this club"
                  }
              }
          )).code(404);
      } else {
        if (bcrypt.compareSync(req.passwordHash, data[0].cpUser.passwordHash)) {
          return reply.response(data).code(200);
        } else {
          console.log("===");
          return reply.response(JSON.stringify(
            {
                "error": {
                    "error_type": "DATABASE_ERROR",
                    "error_message": "The password doesn't correspond to the DB passwordHash"
                }
            }
          )).code(500);
        }
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
}



//Add a new user
export const addUser = (request, reply) => {

    let req = request.payload;

    return dbAddUser(req).then(data => {
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
}

//Update user
export const updateUser = (request, reply) => {

    let req = request.payload;
    return dbUpdateUser(req, req.idUser).then(data => {
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

//delete an user
export const deleteUser = (request, reply) => {
    let idUser = parseInt(request.params.idUser);

    return dbDeleteUser(idUser).then(data => {
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
