//get contacts
const Contact = require("../models/contactmodel");
const asyncHandler = require("express-async-handler");
exports.getallcontacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    status: "success",
    results: contacts.length,
    data: {
      contacts,
    },
  });
});
// get each contact
exports.getcontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("No contact Found ");
  }
  res.status(200).json({
    status: "success",
    // results: contact.length,
    data: {
      contact,
    },
  });
});
// create contact
exports.createcontact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  console.log(req.body);

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("ALL FIELDS ARE MANDATORY");
  }

  const newcontact = await Contact.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      newcontact,
    },
  });
});
// update contact
exports.updatecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("No contact Found ");
  }

  const updatedcontact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    status: "success",
    data: {
      updatedcontact,
    },
  });
});
// delete contact

exports.deletecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("No contact Found");
  }

  await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Contact deleted successfully",
  });
});
