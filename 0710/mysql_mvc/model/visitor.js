require('dotenv').config()
const mysql = require('mysql2/promise');
const { all } = require('../../express/routes/user');
// mysql연결
const getConn = async () => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATA,
    });
};


const allVisitor = async () => {
    const conn = await getConn(); //mysql 접속
    const query = 'SELECT * FROM visitor';
    const [row] = await conn.query(query);
    console.log('model',row);
    await conn.end();
    return row;
};

module.exports = { allVisitor };
