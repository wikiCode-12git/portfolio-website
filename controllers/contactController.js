const contactModel = require("../models/contactModel");

function handleContact(req, res) {

  const { name, email, message } = req.body;

  contactModel.createContact(
    name,
    email,
    message,
    function(error, result) {

      if (error) {
        console.log("Error saving contact:", error);
        return res.status(500).send("Failed to save message.");
      }

      console.log("Contact message saved:", result.insertId);

      res.send("Your message has been received successfully!");
    }
  );
}

module.exports = handleContact;