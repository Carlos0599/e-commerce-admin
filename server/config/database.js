const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'centie_3',
});

pool.query = util.promisify(pool.query);
module.exports = pool;