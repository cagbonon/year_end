const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const Validator = require('fastest-validator');
const Department = require('../models/department');
const generateSlug = require('../helpers/generateslug');
//const { response } = require('..');


function store(req, res) {

    const department = {
        name: req.body.name,
    }

    
    const validator = new Validator();

    const schema = {
        name: { type: 'string', optional: false, },
    }

    const validationResponse = validator.validate(department, schema);
    //const validationResponse = true;

    if (validationResponse) {
        
        const departmentToSave = new Department({
            name:  req.body.name,
        });

        departmentToSave.save().then((result) => {
            res.status(200).json({
                'success': true,
                "message": "Enrégistrement réussi",
                //"department" : result,
            });
        }).catch(
            (error) => {
                res.status(400).json({
                    error: error
                })
            });
    } else {
        res.status(500).json({
            "success": false,
            "message": "Nom incorrect"
        });
    }
}


function index(req, res) {

    Department.find().then((result) => {
        res.status(200).json({
            'success': true,
            'departments': result
        })
    }).catch((err) => {
        res.status(500).json({
            "success": false,
            "message": "Un problème a été rencontré"
        });
    });
}


function show(req, res) {
    Department.findById(req.params.id).then((result) => {
        res.status(200).json({
            'success': true,
            'department': result
        })
    }).catch((err) => {
        res.status(500).json({
            "success": false,
            "message": "Département introuvable"
        });
    });
}



module.exports =
{
    index: index,
    store: store,
    show : show
};