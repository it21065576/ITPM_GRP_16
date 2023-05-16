const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
 
  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("DonarDetails", DonationSchema);