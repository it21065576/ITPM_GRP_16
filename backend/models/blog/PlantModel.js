const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({
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
    plantImage: {
        type: String
    }
});

const plantData = mongoose.model("Plant", plantSchema);
module.exports = plantData;