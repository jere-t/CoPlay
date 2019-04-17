// db/dbreset.js

const mysql = require('mysql');
const fs = require ('fs');

const dbConfig = require('./DB_CONFIG');

const scripts = ['../database/scripts/00-DropTables.sql', "../database/scripts/01-CreateTables.sql", "../database/scripts/02-InsertData.sql"];

// Reads db scripts and regroup in a variable
function getQueryFromFile() {
    let query = "";
    for (let i = 0; i < scripts.length; i++) {
        //synchronously read -> has to be sure to get each file before the next one
        query += fs.readFileSync(scripts[i], 'utf8');
    }
    return query;
}

//mysql connection
let con = mysql.createConnection(
    {
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        multipleStatements: dbConfig.multipleStatements,
        debug: dbConfig.debug,
    }
);

//ensure of connection and send the query to the database
con.connect(function(err) {
  if (err) throw err;
  con.query(getQueryFromFile(), function (err, result) {
    if (err) throw err;
    console.log("Database reseted successfully");
  });
});
