// handlers/playground.js
import { dbGetAllPlaygrounds, dbGetPlaygroundById } from '../models/playground';

//Get all playgrounds
export const getAllPlaygrounds = (request, reply) => {
    return dbGetAllPlaygrounds().then(data => {
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

//Get a playground by Id
export const getPlaygroundById = (request, reply) => {
    let id = parseInt(request.params.id);
     return dbGetPlaygroundById(id).then(data => {
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
