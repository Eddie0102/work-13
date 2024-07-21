require("dotenv").config();
const mysql = require("mysql2/promise");
// mysql/promise 패키지를 불러옴.
// mysql데이터베이스와의 연결을 지원하는 Node.js용 Mysql 클라이언트 라이브러리

const conn = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASS,
  database: process.env.DATA,
  connectionLimit: 20, //최대연결수(기본값10)
});
// createPool메서드를 사용하여 MySql연결 풀을 생성
// 연결 풀은 애플리케이션이 필요할 때 마다 연결을 관리하고 재사용할 수 있도록 도움
exports.signup = async (userid, name, pw) => {
  const add = "insert into user_mvc (userid,name,pw) values (?,?,?)";
  //   여기서 add는 단순히 문자열로 구성된 SQL쿼리문(insert:삽입)을 JavaScript 변수에 할당
  const [result] = conn.query(add, [userid, name, pw]);
  //  conn.query()는 MySQL 라이브러리에서 제공하는 메서드로
  //  MySQL 데이터베이스에 대해 SQL 쿼리를 실행하고 그 결과를 반환하는 역할을 한다.
  //  그리고 여기서는 add에 담긴 SQL쿼리문(insert:삽입)을 실행하여
  //  데이터베이스에 회원가입 데이터(userid, name, pw)를 삽입한다.
  //   [result]로 쓴 것은 배열 구조 분해를 통해 MySQL 쿼리 결과에서 반환되는 배열에서 첫 번째 요소(userid)만을 result 변수에 할당
  return result;
};
