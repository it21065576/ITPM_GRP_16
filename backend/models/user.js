const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    con_no:{
        type:String,
        required:true
    },
    service_type:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('user',userSchema);

