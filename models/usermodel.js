const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user must have username"],
    },
    email: {
      type: String,
      required: [true, "user must have email address"],
      unique: [true, "email adress already existed"],
    },
    password: {
      type: String,
      required: [true, "user must have password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
