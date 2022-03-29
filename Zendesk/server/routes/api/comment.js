const express = require('express');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();


router.get('/', commentController.getCommentTicketsCtrl);   //get all tickets / passe ticketid as argmt

router.post('/', commentController.addCommentCtrl);  //store ticket

//router.get('/update', ticketController.index);

module.exports = router;