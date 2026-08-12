const mysql = require("mysql2");
const dbconfig = require("../config/dbconfig");

// establish db connections
const db = mysql.createConnection(dbconfig);

// check connection if running
db.connect(function(error) {
  if (error) {
    console.log("Database connection failed:", error);
    return;
  }

  console.log("MySQL database connected successfully!");
});

module.exports = db;