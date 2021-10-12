const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const innovationRoutes = require('./innovations/routes/innovationRoutes.js');
const investmentRoutes = require('./innovations/routes/investmentRoutes.js');
const userRoutes = require('./innovations/routes/userRoutes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/innovations', innovationRoutes);
app.use('/api/investment', investmentRoutes);
app.use('/api/user', userRoutes);


// app.get("/", (req, res) => {

//     const sqlInsert = "INSERT INTO products (product_id, product_price, product_category, product_pictures) VALUES ('2', '400', 'Electronics' )"
//     db.query(sqlInsert, (err, result) => {
//         res.send("Hello world");
//     })
    
// });

// get all users
app.get("/", (req, res) => {
    db.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ${connection.threadId}');

        connection.query('SELECT * FROM users', (err, rows) =>{
            connection.release();

            if(!err){
                res.send(rows);
            }else{
                console.log(err);
            }
        })
    });
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});