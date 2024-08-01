const { DataTypes } = require("sequelize");

const waiting = (seq) => {
  return seq.define("waiting", {
    userStatus: {
      type: DataTypes.STRING,
    },
    start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  });
};

module.exports = waiting;
