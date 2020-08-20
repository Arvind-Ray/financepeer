const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    userId: {
        type: Number,
        required: true,
        minlength: 1,
    },
    id: {
        unique: true,
        required: true,
        minlength: 1,
        type: Number,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    body: {
        type: String,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = {Post};