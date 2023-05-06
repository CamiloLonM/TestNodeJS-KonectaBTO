# Challenge KonectaBTO

This is a fullstack application using React JS and Node JS.
It lets you add new employees and see them, and also you can check their requests add new ones and delete them.

## Technologies Used

- React JS
- Node JS
- Database (postgres sql)

## How to start using the app

### Create tables and seed database

- First, run the queries inside `structure.sql` (./database/structure.sql) to create a new database and the tables if it is necessary.
- Then, run the queries inside `seed.sql` (./database/seed.sql) to seed the database with some data.

### Run the API

- To start using the API, first you need to copy the `.env.sample` file and rename it `.env` and complete the variables to run the app in a port and to connect to the database.
- Then, run the following command to start using the api `npm run start:dev`.

### Run the WEB

- To start using the WEB, first you need to copy the `.env.sample` file and rename it `.env` and complete the API url to start using the app.
- Then, run the following command to start using the web, `npm run dev`.