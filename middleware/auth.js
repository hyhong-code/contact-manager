const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Extract token
  const token = req.headers["x-auth-token"];

  // Token not exist
  if (!token) {
    return res
      .status(401)
      .json({ errors: [{ msg: "No token, authorization denied" }] });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Attach decoded user id to req.user
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ errors: [{ msg: "Token is not valid" }] });
  }
};
