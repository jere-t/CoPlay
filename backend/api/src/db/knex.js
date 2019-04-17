import knex from "knex";
const dbConfig = require('./DB_CONFIG');

// configuration
export default knex({
  client: "mysql",
  connection: {
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    debug: dbConfig.debug
  },
  pool: { min: 0, max: 7 }
});
