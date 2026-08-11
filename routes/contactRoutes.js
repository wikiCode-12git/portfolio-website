const express = require("express"); // import express

const handleContact = require("../controllers/contactController"); 
const validateContact = require("../middleware/validateContact");

const router = express.Router(); // route manager

router.post("/contact", validateContact, handleContact);
 

module.exports = router; // declare the router globally available to other JavaScript files.