"use strict";

const Sequelize = require("sequelize");
//Sequelize 라이브러리를 가져와서 Node.js애서 SQL 데이터베이스와 상호작용(데이터 등록, 조희, 수정 등)을 보다 쉽게 할 수 있음
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};
//모델을 저장할 객체를 초기화

let sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 초기화
// require을 사용하여 post와 user 모델 파일을 불러온다.
// 모델파일은 sequelize인스턴스를 인자로 받아 모델 정의를 수행한다?????????
/*
  모델 파일: Sequelize에서는 각 데이터베이스 테이블에 해당하는 모델 파일을 만든다.
  예를 들어, post.js 파일에는 "Post"라는 데이터베이스 테이블을 정의하는 코드가 들어 있고,
  마찬가지로, user.js 파일에는 "User" 테이블을 정의하는 코드가 들어 있다.
*/
/*
  sequelize 인스턴스: sequelize를 통해 데이터베이스와 연결할 수 있는 객체.
  이 객체를 사용해서 모델을 정의하고, 데이터베이스에서 데이터를 가져오거나 저장하는 등의 작업을 수행함.
*/
// db.Post = require("./post")(sequelize);
db.User = require("./user")(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
