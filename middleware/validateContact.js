function validateContact(req, res, next) {
  
  const { name, email, message } = req.body;

  if (!name || !email || !message ) {
    return res.status(400).send("Please fill in all fields.");
  }
  
  next();
}

module.exports = validateContact;