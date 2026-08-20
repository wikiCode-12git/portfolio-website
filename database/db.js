const mysql = require("mysql2");
const dbconfig = require("../config/dbConfig");

const db = mysql.createPool({
    ...dbconfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((error, connection) => {

    if (error) {

        console.error("MySQL connection failed:", error);

        return;
    }

    console.log("MySQL database connected successfully!");

    connection.release();
});


module.exports = db;