const mongoose = require("mongoose");
const User= require("./usermodel")
const contactSchema = new mongoose.Schema(
  {
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true, "user id must belong to there own contact"],
        ref:"User"

    },
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
