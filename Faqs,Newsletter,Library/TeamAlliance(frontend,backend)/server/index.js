const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Password@123",
  database: "AllianceDB",
});

app.post("/create", (req, res) => {
 
  const email = req.body.email;
  const message = req.body.message;

  db.query(
    "INSERT INTO faq (faq_question, faq_answer) VALUES (?,?)",
    [email, message],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/newsletter", (req, res) => {
  db.query("SELECT * FROM news_letter", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/newsletter/:id", (req, res) => {
  const {id} = req.params;
  console.log(id);
  db.query(`SELECT * FROM news_letter WHERE newsletter_ID = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});


