const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Extract token
  const token = req.headers["x-auth-token"];

  // Token not exist
  if (!token) {
    return res.status(401).json({ errors: [{ msg: "Invalid credentials" }] });
  }

  next();
};
