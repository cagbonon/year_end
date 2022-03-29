const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    ticketId: { type: String },
    bodyComment: { type: String },
    senderId: { type: String },
    receverId: { type: String },
}, {
    timestamps: true,
});

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;
