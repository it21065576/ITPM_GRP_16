const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    blogID: {
        type: String,
        required: true,
        unique: true
    },

    bloggerName: {
        type: String,
        required: true
    },

    bloggerPosition: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    bloggerImage: {
        type: String
    }
})

const blogData = mongoose.model("Blog", BlogSchema);
module.exports = blogData;