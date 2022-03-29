const Comment = require('../models/comments');

const addComment = (comment) => {
    let commentInstance = new Comment(comment);

    return commentInstance.save();
}

function getCommentTickets(ticketId) {
    return Comment.find({ ticketId: ticketId });
}


function addCommentCtrl(req, res, next) {
    let { ticketId, bodyComment, senderId, receverId } = { ...req.body };

    console.log(ticketId);
    if (ticketId && bodyComment && senderId && receverId) {
        addComment({ ticketId, bodyComment, senderId, receverId }).then(() => {
            return res.status(200).json({ msg: "Comment correctly send" });
        }).catch((err) => {
            res.status(500).json({ err: "Internal Server" });
        });
    } else {
        return res.status(400).json({ err: "Bad Request" });
    }
}

function getCommentTicketsCtrl(req, res, next) {
    let ticketId = req.body.ticketId;

    if (ticketId) {
        return getCommentTickets(ticketId).then((value) => {
            res.status(200).json({ body: value });
        }).catch((err) => res.status(500).json({ err: "Internal Server" }));
    } else {
        return res.status(400).json({ err: "Bad Request" });
    }
}

module.exports = {
    addCommentCtrl: addCommentCtrl,
    getCommentTicketsCtrl: getCommentTicketsCtrl
};