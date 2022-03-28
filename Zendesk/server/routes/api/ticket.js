const express = require('express');
const ticketController = require('../../controllers/ticket.controller');

const router = express.Router();


router.get('/', ticketController.index);   //get all tickets

router.post('/', ticketController.store);  //store ticket

router.post('/:id', ticketController.show);  //find ticket by id

router.delete('/:id', ticketController.destroy);  //find ticket by id

router.patch('/:id', ticketController.updateStatus);  //find ticket by id

//router.get('/update', ticketController.index);

module.exports = router;