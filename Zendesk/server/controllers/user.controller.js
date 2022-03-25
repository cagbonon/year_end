const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const Validator = require('fastest-validator');
const User = require('../models/user');
//const { response } = require('..');


function store(req, res) {

    const schema = {
        departmentId: { type: 'string', optional: false },
        firstName: { type: 'string', optional: false,},
        lastName: { type: 'string', optional: false },
        email: { type: 'email', optional: false , max:100},
    }

    const user = {
        departmentId: req.body.departmentId,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email:req.body.email
    }

    console.log(user);


    const validator = new Validator();


    const validationResponse = validator.validate(user,schema);

    if (validationResponse) {
        
        const userToSave = new User({
            departmentId: req.body.departmentId,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email:req.body.email
        });

        userToSave.save().then(() => {
            res.status(200).json({
                'success': true,
                "message": "Enrégistrement réussi",
                //"res" : result
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
            "message": "Données invalides"
        });
    }
}


function index(req, res) {

    User.find().then((result) => {
        res.status(200).json({
            'success': true,
            'users': result
        })
    }).catch((err) => {
        res.status(500).json({
            "success": false,
            "message": "Un problème a été rencontré"
        });
    });
}


function show(req, res) {
    User.findById(req.params.id).then((result) => {
        res.status(200).json({
            'success': true,
            'user': user
        })
    }).catch((err) => {
        res.status(500).json({
            "success": false,
            "message": "Utilisateur introuvable"
        });
    });
}







module.exports =
{
    index: index,
    store: store,
    show : show
};