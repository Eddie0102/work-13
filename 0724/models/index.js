"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Waiting = require("./waiting")(sequelize);
db.User = require("./user")(sequelize);

db.Waiting.hasMany(db.User, { foreignKey: "waitingId", onDelete: "CASCADE" });
db.User.belongsTo(db.Waiting, { foreignKey: "waitingId", onDelete: "CASCADE" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
