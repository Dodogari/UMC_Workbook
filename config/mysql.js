//데이터베이스와 연결
const mysql = require('mysql2/promise');

//호스트, 포트, 사용자, 비밀번호, 데이터베이스, 타임아웃, 연결 제한
export const connection = mysql.createConnection ({
    host: process.env.host,
    port: process.env.user,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    connectTimeout: 5000,
    connectionLimit: 10
})