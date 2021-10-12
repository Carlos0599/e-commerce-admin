const pool = require('./../../config/database.js');
const router = require("express").Router();


//Get All User
router.get('/', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('SELECT * from users', (err, rows) =>{
            connection.release(); //return the connection to pool
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
        });

    });
});

//Get User by ID
router.get('/:id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('SELECT * from users WHERE user_id = ?',[req.params.id], (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
        });

    });
});



module.exports = router;