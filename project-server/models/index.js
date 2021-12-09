const config = require('../config/db.config');
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    config.DB, 
    config.USER, 
    config.PASSWORD, 
    {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: config.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./users.model.js')(sequelize, Sequelize)
db.score = require('./scores.model.js')(sequelize, Sequelize)

module.exports = db;