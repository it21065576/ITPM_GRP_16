const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },

    goal:{
        type:String,
        required:true
    },

    here:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('feedback',feedbackSchema);

