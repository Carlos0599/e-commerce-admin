var mysql = require ('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'AllianceDB',
    user: 'root',
    password: 'Password@123'
})

module.exports = connection;