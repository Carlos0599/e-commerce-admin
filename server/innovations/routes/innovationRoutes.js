const pool = require('./../../config/database.js');
const router = require("express").Router();

//Get All innovations
router.get('/', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('SELECT * from innovation', (err, rows) =>{
            connection.release(); //return the connection to pool
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
        });

    });
});

//Get Innovation by ID
router.get('/:id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('SELECT * from innovation WHERE innovation_id = ?',[req.params.id], (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
        });

    });
});

//Delete Innovation by ID
router.delete('/:id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('DELETE from innovation WHERE innovation_id = ?',[req.params.id], (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(`Innovation with the innovation_id: ${req.params.id} has been removed`);
            } else {
                console.log(err);
            }
        });

    });
});

//Add an Innovation 
router.post('/', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        
        const params = req.body;
        
        //query
        connection.query('INSERT INTO innovation SET ?',params, (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(`Innovation with the innovation name: ${params.innovation_name} has been added`);
            } else {
                console.log(err);
            }
        });
        console.log(req.body);

    });
});


//UPDATE an Innovation 
router.put('/', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);

        const { innovation_id, 
            innovation_name, 
            innovation_description, 
            innovation_story, 
            innovation_title, 
            innovation_status, 
            product_id, 
            innovator_id } = req.body;
        
        //query
        connection.query('UPDATE innovation SET innovation_description = ? WHERE innovation_id = ?', [ innovation_description, innovation_id ], (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(`Innovation with the innovation ID: ${innovation_id} has been updated`);
            } else {
                console.log(err);
            }
            
        });
        console.log(req.body);

    });
});



module.exports = router;







