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
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Email is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Save new Contact
    try {
      const { name, email, phone, type } = req.body;
      const newContact = await new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      }).save();
      res.json(newContact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put(
  "/:id",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Email is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let contact = await Contact.findById(req.params.id);

      // Contact not found
      if (!contact) {
        return res.status(400).json({ errors: [{ msg: "No such contact" }] });
      }

      // Contact does not belong to user
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({ errors: [{ msg: "Not authorized" }] });
      }

      // Update contact
      const { name, email, phone, type } = req.body;

      // Prevent overwrite with undefined
      const contactFields = {};
      if (name) contactFields.name = name;
      if (email) contactFields.email = email;
      if (phone) contactFields.phone = phone;
      if (type) contactFields.type = type;

      contact = await Contact.findByIdAndUpdate(
        req.params.id,
        {
          $set: contactFields,
        },
        { new: true }
      );
      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    // Contact not found
    if (!contact) {
      return res.status(400).json({ errors: [{ msg: "No such contact" }] });
    }

    // Contact does not belong to user
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ errors: [{ msg: "Not authorized" }] });
    }

    // Delete contact
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
