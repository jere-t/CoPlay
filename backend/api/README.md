## Available Scripts

In the project directory, you can run:

### `npm build`

This will build the project with babel and put in the dist folder

### `npm db:init`

This will execute the SQL sript to create the DB (MySql / MariaDB)

### `npm serve`

This will run the builded app

### `npm start`

This will run the API


## Getting started

The first thing to do is to configure the file on the path "./src/db/DB_CONFIG.js" with your MySql/MariaDB configuration.

Then the script : `npm run db:init` can be run. 

Finally, you can run the script `npm start` to launch the API

The back-end can be access on http://localhost:3001/api.

A documentation is automatically created and is reachable at the link http://localhost:3001/api/documentation
