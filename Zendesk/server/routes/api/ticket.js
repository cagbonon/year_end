const express = require('express');
const ticketController = require('../../controllers/ticket.controller');

const router = express.Router();


router.get('/', ticketController.index);   //get all tickets

router.post('/createTicket', ticketController.store);  //store ticket

router.post('/:id', ticketController.show);  //find ticket by id

//router.get('/update', ticketController.index);

module.exports = router;