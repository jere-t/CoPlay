# CoPlay
Application CoPlay with the DB, API and Frontend

## Getting started
These instructions will guide you to get a copy of this project and running on your local machine.
### Prerequisites
#### Back-end:
- MariaDB (or MySql)
- Node.js

#### Front-end:
- React.js

### Installation
Clone the repo
```
git clone git@github.com:Adorax/CoPlay.git
```

Change to the `backend/api` folder and install the API dependencies.

```
cd backend/api
npm install
```

Change to the `frontend/coplay` folder and install frontend dependencies.
```
cd frontend/coplay
npm install
```

Then you will need to set up MariaDB. See [MariaDB](https://mariadb.org/) for instructions. For MacOS, see [MariaDB MacOS](https://mariadb.com/kb/en/library/installing-mariadb-on-macos-using-homebrew/) for instructions.

Once the database is installed, you will have to create a database and  to create an user with access to SELECT, INSERT, DELETE, UPDATE on this database.

Write on the file `backend/api/src/db/DB_CONFIG.js` with your database configuration.
```
vi backend/api/src/db/DB_CONFIG.js
```

Then the script : `npm run db:init` can be run.
```
cd backend/api
npm run db:init
```

Go to the `backend/api` folder and start the server.
```
cd backend/api
npm start
```

Go to the `frontend/coplay` folder and run the script start script.
```
cd frontend/coplay
npm start
```

Open in your browser and navigate to http://localhost:3000. The back-end can be access on http://localhost:3001/api.
