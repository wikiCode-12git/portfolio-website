const express = require("express");
const cors = require("cors");

require("./database/db"); // import db connection

const contactRoutes = require("./routes/contactRoutes");

const app = express(); // create express application
app.use(cors());

app.use(express.json()); // allow express to understand JSON data sent from the frontend

app.use(express.static("public"));

app.use("/", contactRoutes); // connects our contact router to the main application

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", ()=> {
  console.log(`server running on port ${PORT}`);
});