const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password: plain } = req.body;

    try {
      let user = await User.findOne({ email });

      // Check if email in use
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Email is already in use" }] });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(plain, salt);

      // Save the user
      user = await new User({ name, email, password }).save();

      // Sign a jwt
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;

          // Send the jwt back to client
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
