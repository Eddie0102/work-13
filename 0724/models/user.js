const { DataTypes } = require("sequelize");

const user = (seq) => {
  return seq.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //not null
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
};

module.exports = user;
