const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MachineSchema = new Schema({
    machineID: {
        type: String,
        required: true,
        unique: true
    },

    machineName: {
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
    machineImage: {
        type: String
    }
});

const machineData = mongoose.model("Machines", MachineSchema);
module.exports = machineData;