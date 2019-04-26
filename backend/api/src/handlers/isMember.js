// handlers/isMember.js
import { dbGetAllIsMembers, dbGetAllIsMembersByIdUser, dbGetAllIsMembersByIdClub, dbGetAllIsMembersByIdUserIdClub, dbAddIsMember, dbUpdateIsMember, dbDeleteIsMember } from '../models/isMember';

//Get all isMembers
export const getAllIsMembers = (request, reply) => {
    return dbGetAllIsMembers().then(data => {
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

//Get all isMembers by IdUser
export const getAllIsMembersByIdUser = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetAllIsMembersByIdUser(id).then(data => {
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

//Get all isMembers by IdClub
export const getAllIsMembersByIdClub = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetAllIsMembersByIdClub(id).then(data => {
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

//Get all isMembers by IdClub
export const getAllIsMembersByIdUserIdClub = (request, reply) => {
    let idUser = parseInt(request.params.idUser);
    let idClub = parseInt(request.params.idClub);
     return dbGetAllIsMembersByIdUserIdClub(idUser, idClub).then(data => {
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

//Add a new IsMember
export const addIsMember = (request, reply) => {

    let req = request.payload;

    return dbAddIsMember(req).then(data => {
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

//Update isMember
export const updateIsMember = (request, reply) => {

    let req = request.payload;
    return dbUpdateIsMember(req, req.fkUserIsM, req.fkClubIsM).then(data => {
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
export const deleteIsMember = (request, reply) => {
    let idUser = parseInt(request.params.idUser);
    let idClub = parseInt(request.params.idClub);

    return dbDeleteIsMember(idUser, idClub).then(data => {
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
