const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();


router.get('/', userController.index);   //get all tickets

router.post('/', userController.store);  //store ticket

router.post('/:id', userController.show);  //find ticket by id

//router.get('/update', ticketController.index);

module.exports = router;