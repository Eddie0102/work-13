const { DataTypes } = require("sequelize");
// DataTypes는 sequelize의 데이터 타입들을 사용하기 위한 수단이 되는 객체

const user = (sequelize) => {
  return sequelize.define("user", {
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
