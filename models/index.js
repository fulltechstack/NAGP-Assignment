'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config');
const db = {};

// Get the database configuration from either environment variables or the config file
let dbName = process.env.DB_NAME || config.database;
let username = process.env.DB_USERNAME || config.username;
let password = process.env.DB_PASSWORD || config.password;
let host = process.env.DB_HOST || config.host;
const dialect = 'mysql';

// Create Sequelize instance with the database configuration
const sequelize = new Sequelize(dbName, username, password, {
    host: host,
    dialect: dialect,
    logging: false,
});

// Load all the model files in the current directory
fs
    .readdirSync(__dirname)
    .filter(file => {
        // Filter out files starting with a dot, the current module file, and files that don't end with .js
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        // Require the model file and initialize it by passing the Sequelize instance and DataTypes object
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model; // Store the model in the db object using its name as the key
    });

// Establish associations between models if the model has an associate method
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Set the database name in the Sequelize configuration object
sequelize.config.database = dbName;

// Assign the Sequelize instance and the Sequelize object to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;