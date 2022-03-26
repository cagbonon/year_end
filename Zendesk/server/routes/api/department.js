const express = require('express');
const departmentController = require('../../controllers/department.controller');

const router = express.Router();


router.get('/', departmentController.index);   //get all departments

router.post('/', departmentController.store);  //store department

router.post('/:id', departmentController.show);  //find department by id

router.patch('/:id', departmentController.update);  //update department 

module.exports = router;