const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FertilizerSchema = new Schema({
    fertilizerID: {
        type: String,
        required: true,
        unique: true
    },

    fertilizerName: {
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
    fertlilizerImage: {
        type: String
    }
});

const fertilizerData = mongoose.model("Fertilizer", FertilizerSchema);
module.exports = fertilizerData;