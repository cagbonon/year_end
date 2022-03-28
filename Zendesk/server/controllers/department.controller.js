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

function destroy(req,res){
    Department.findByIdAndRemove(req.params.id).then((result) => {
        console.log(req.params.id);
        if(result != null){
            res.status(200).json({
                'success': true,
                'message': "Suppression effectuée"
            })
        }
        else{
            res.status(200).json({
                'success': true,
                'message': "Departement introuvable"
            })
        }
      
    }).catch((err) => {
        res.status(500).json({
            "success": false,
            "message": "Suppression impossible"
        });
    });
}

function update(req,res){

    const department = {
        name: req.body.name,
    }

    
    const validator = new Validator();

    const schema = {
        name: { type: 'string', optional: false, },
    }

    const validationResponse = validator.validate(department, schema);

    if (validationResponse) {
        
        const updateOfDepartment = req.body;
       
        Department.findByIdAndUpdate(req.params.id, {$set : req.body}).then((result) => {
            if(result != null){
                res.status(200).json({
                    'success': true,
                    'message': "Mise à jour effectuée"
                })
            }
            else{
                res.status(200).json({
                    'success': true,
                    'message': "Departement introuvable"
                })
            }
          
        }).catch((err) => {
            res.status(500).json({
                "success": false,
                "message": "Modification impossible"
            });
        });

    }
    else {
        res.status(500).json({
            "success": false,
            "message": "Nom incorrect"
        });
    }
    
}


module.exports =
{
    index: index,
    store: store,
    show : show,
    destroy : destroy,
    update : update,
};