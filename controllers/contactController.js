//get contacts

const asyncHandler = require("express-async-handler");
exports.getallcontacts = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Get all contacts",
  });
});
// get each contact
exports.getcontact = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Get a contact",
  });
});
// create contact
exports.createcontact = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) res.status(400);
  throw new Error("ALL FIELDS ARE MANDATORY");

  res.status(200).json({
    status: "success",
    message: "Create contacts",
  });
});
// update contact
exports.updatecontact = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Update contacts",
  });
});
// delete contact

exports.deletecontact = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Delete  contact",
  });
});



