const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // XAMPP default
  password: "",       // empty if you didn’t set a password
  database: "test_db" // must match your database name exactly
});

db.connect((err) => {
  if (err) {
    console.error(" Database connection failed:", err.message);
  } else {
    console.log(" Connected to MySQL database");
  }
});

module.exports = db;
s
