'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.Post =require('./post')(sequelize);
// (축약형)
// const model = require('./post')
// const db = model(sequelize)
// db.Post = db
db.User = require('./user')(sequelize);



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
