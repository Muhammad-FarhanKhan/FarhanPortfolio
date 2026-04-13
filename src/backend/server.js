const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // aapka MySQL password
  database: "portfoliocontactform" // aapka database name
});

db.connect(err => {
  if (err) console.log("DB Error:", err);
  else console.log("MySQL connected");
});

// POST route
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
  }

  const sql = "INSERT INTO contact_messages (name,email,subject,message) VALUES (?,?,?,?)";
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }
    res.send("Message saved successfully!");
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});