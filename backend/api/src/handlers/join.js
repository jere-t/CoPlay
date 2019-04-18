// handlers/join.js
import { dbGetAllJoins, dbGetJoinById } from '../models/join';

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

//Get all joins by IdClub
export const getAllJoinsByIdClub = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetAllJoinsByIdClub(id).then(data => {
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
