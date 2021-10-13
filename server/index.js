const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "centie",
});

// app.get("/", (req, res) => {

//     const sqlInsert = "INSERT INTO products (product_id, product_price, product_category, product_pictures) VALUES ('2', '400', 'Electronics' )"
//     db.query(sqlInsert, (err, result) => {
//         res.send("Hello world");
//     })

// });

// get all users
app.get("/", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});
///PRODUCT

app.get("/retreiveBook", (req, res) => {
  db.query("SELECT * FROM book", (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/retreiveInnovation", (req, res) => {
  db.query("SELECT * FROM innovation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/retreiveSouvenir", (req, res) => {
  db.query("SELECT * FROM souvenir", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/retreiveProduct", (req, res) => {
  db.query(
    `SELECT * FROM products WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveBookById", (req, res) => {
  db.query(
    `SELECT * FROM book WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/retrieveInnovationById", (req, res) => {
  db.query(
    `SELECT * FROM innovation WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/retrieveSouvenirById", (req, res) => {
  db.query(
    `SELECT * FROM souvenir WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/insertOrder", (req, res) => {
  const order_date = req.body.order_date;
  const order_total = req.body.order_total;
  const user_id = req.body.user_id;
  db.query(
    "INSERT INTO orders (order_date, order_total, user_id) VALUES (?,?,?)",
    [order_date, order_total, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.insertId);

        res.send(result);
      }
    }
  );
});

app.post("/insertOrderDetail", (req, res) => {
  console.log(req);
  const order_id = req.body.order_id;
  const product_id = req.body.product_id;
  const order_date = req.body.order_date;
  const payment_proof = req.body.payment_proof;
  const payment_type = req.body.payment_type;
  const order_total = req.body.order_total;
  db.query(
    "INSERT INTO order_details (order_id, product_id, order_date, payment_proof, payment_type, order_total) VALUES (?,?,?,?,?,?)",
    [
      order_id,
      product_id,
      order_date,
      payment_proof,
      payment_type,
      order_total,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/insertPayment", (req, res) => {
  const payment_type = req.body.payment_type;
  const payment_proof = req.body.payment_proof;
  const order_id = req.body.order_id;
  const user_id = req.body.user_id;
  db.query(
    "INSERT INTO invest_transaction (payment_type, payment_proof, order_id, user_id) VALUES (?,?,?,?)",
    [payment_type, payment_proof, order_id, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/insertTransaction", (req, res) => {
  const invest_amount = req.body.invest_amount;
  const invest_date = req.body.invest_date;
  const innovation_id = req.body.innovation_id;
  const investor_id = req.body.investor_id;
  const invest_reference = req.body.invest_reference;
  const invest_proofPayment = req.body.invest_proofPayment;
  db.query(
    "INSERT INTO invest_transaction (invest_amount, invest_date, innovation_id, investor_id, invest_reference, invest_proofPayment) VALUES (?,?,?,?,?,?)",
    [
      invest_amount,
      invest_date,
      innovation_id,
      investor_id,
      invest_reference,
      invest_proofPayment,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/insertCart", (req, res) => {
  const cart_id = req.body.cart_id;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  const user_id = req.body.user_id;
  db.query(
    "INSERT INTO cart (cart_id,product_id, quantity, user_id) VALUES (?,?,?,?)",
    [cart_id, product_id, quantity, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveCart", (req, res) => {
  db.query("SELECT * FROM Cart", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.put("/updateCartQuantity", (req, res) => {
  db.query(
    "UPDATE cart SET ? WHERE cart_id = ?",
    [{ quantity: req.body.params.quantity }, req.body.params.id],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log("Errpr " + err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});
app.delete("/deleteItemCart", (req, res) => {
  console.log(req);

  db.query(
    "DELETE FROM Cart WHERE cart_id=?",
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveProductById", (req, res) => {
  db.query(
    `SELECT * FROM products WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.listen(3000, () => {
  console.log("Running on port 3000");
});
