require('dotenv').config();

module.exports ={
  development:{
    username: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DATA,
    host: process.env.HOST,
    dialect: 'mysql',
  },
  production:{
    username: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.NEWDATA,
    host: process.env.HOST,
    dialect: 'mysql',
    //  사용할 데이터 베이스 종류를 설정: mysql
  },
}
