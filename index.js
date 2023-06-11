const express = require('express');
const db = require('./models/index');

const app = express();
const port = 3000;

const todoRoute = require('./routes/todo.routes');

//This method will cretae connection with database
async function syncDatabase() {
    db.sequelize.sync()
        .then(() => {
            console.log('DB connection established successfully.');
        })
        .catch(err => {
            console.log(`Cannot connect to DB: ${JSON.stringify(err)}`);
        });
}

//This method will check for db connection and will start the server
async function startServer() {
    await syncDatabase();

    app.listen(port, () => {
        console.log(`Started server on port ${port}`);
    });
}

app.use('/', todoRoute);

startServer();