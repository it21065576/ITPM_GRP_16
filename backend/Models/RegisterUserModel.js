const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegisterUserSchema = new Schema({
    plantID: {
        type: String,
        required: true,
        unique: true
    },

    plantName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
});

const RegisterUserData = mongoose.model("RegisterUser", RegisterUserSchema);
module.exports = RegisterUserData;