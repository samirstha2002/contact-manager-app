const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("./../models/usermodel");
const { hash } = require("bcrypt");
exports.register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("The user is already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,

    password: hashedPassword,
  });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user registrtaion failed");
  }
});

exports.login = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "user is logged in ",
  });
});

exports.currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "current user information ",
  });
});
