const Contactcontroller = require("../module/createmodule");

// Create a new contact ---- POST Method

const createContact = async (req, res) => {
  const { name, email, phoneNumber, address } = req.body;
  try {
    // Validate input
    if (!name || !email || !phoneNumber || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate phone number pattern (example: 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      return res.status(400).json({ error: "Invalid phone number format" });
    }
    // Create new contact
    const contact = await Contactcontroller.create({
      name,
      email,
      phoneNumber,
      address,
    });

    // Send response
    res.status(200 && 201).json({
      contact,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    res.status(404).json({ error: "Not found" });
  }
};

// Get all contacts---GET Method

const getContact = async (req, res) => {
  try {
    const contacts = await Contactcontroller.find();
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    res.status(404).json({ error: "Not found" });
  }
};

// Edit a contact---PUT Method

const editContact = async (req, res) => {
  try {
    const contact = await Contactcontroller.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ contact });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    res.status(404).json({ error: "Not found" });
  }
};

// get single contact by id---GET Method

const getSingleContactById = async (req, res) => {
  try {
    const { id, name } = req.params;
    let contact;

    if (id) {
      contact = await Contactcontroller.findById(id);
    } else if (name) {
      contact = await Contactcontroller.findOne({ name });
    }

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({ contact });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a contact---DELETE Method

const deleteContact = async (req, res) => {
  try {
    const contact = await Contactcontroller.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    res.status(404).json({ error: "Not found" });
  }
};

module.exports = {
  createContact,
  getContact,
  editContact,
  deleteContact,
  getSingleContactById,
};
