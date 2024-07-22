const { DataTypes } = require("sequelize");

const user = (seq) => {
  return seq.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //not null
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    userPw: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });
};

module.exports = user;
