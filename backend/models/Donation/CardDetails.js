const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  cardno: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  cvc: {
    type: String,
    required: true,
  },
 
  cardOwner: {
    type: String,
    required: true,
  },

 
});

module.exports = mongoose.model("CardDetails", CardSchema);