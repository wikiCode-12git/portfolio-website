const db = require("../database/db");

function createContact(name, email, message, callback) {

  const sql = `
    INSERT INTO contacts ( name, email, message )
    VALUES (?, ?, ?)
  `;

  db.query(
    sql, 
    [name, email, message], callback
  );
}


module.exports = {
  createContact
};