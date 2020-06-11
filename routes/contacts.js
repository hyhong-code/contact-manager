const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Contact = require("../models/Contact");

const router = express.Router();

// @route   GET api/contacts
// @desc    Get all contacts of a user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    // Get most recent contacts first
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }

  res.send("Get user's contacts.");
});

// @route   POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
