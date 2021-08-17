const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true, maxLength: 250 
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;