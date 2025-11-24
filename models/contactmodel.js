const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Contact must have name"],
    },

    email: {
      type: String,
      required: [true, "Contact must have email"],
      unique:true
    },

    phone: {
      type: Number,
      required: [true, "Conatact must have phone number "],
      unique:true
    },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model('Contact',contactSchema)
