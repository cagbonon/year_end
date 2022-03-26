
const config = require('config');
const db = config.get('mongoURI');
const Validator = require('fastest-validator');
const Ticket = require('../models/ticket');
const User = require('../models/user');
const saveFile = require('../helpers/savefile');
const nodemailer = require("../config/nodemailerTicket.config")
var nodeoutlook = require('nodejs-nodemailer-outlook')
//const { response } = require('..');


function store(req, res) {
    var emails = [];

    const ticket = {
        department: req.body.department,
        subject: req.body.subject,
        description: req.body.description,
        url_image: req.body.url_image,
        cc: req.body.cc
    }

    console.log(ticket);

    const validator = new Validator();

    const schema = {
        department: { type: 'string', optional: false },
        subject: { type: 'string', optional: false },
        description: { type: 'string', optional: false },
        url_image: { type: 'string', optional: true },
        cc: { type: "array", items: "email" }
    }

    const validationResponse = validator.validate(ticket, schema);
    //const validationResponse = true;

    // const departements = {
    //     "Bocal": ["daryl.medegan@epitech.eu", "emmanuel.solomon@epitech.eu"],
    //     "Finance ": ["jaures.gomez@epitech.eu", "judith-marielle.dossou-yovo@epitech.eu"],
    //     "Administrative": ["rockyath.amoussa@epitech.eu", "chistelle.houssou@epitech.eu", "emmanuel.solomon@epitech.eu"],
    //     "Pedagogy": ["irys1.gbessemehlan@epitech.eu", "daryl.medegan@epitech.eu", "emmanuel.solomon@epitech.eu", "lawal.alao@epitech.eu", "ghislain.gandjonon@epitech.eu"],
    //     "Directors": ["emmanuel.solomon@epitech.eu", "johannes.bruffaerts@epitech.eu", "jerôme.medegan@epitech.eu"],
    //     "Carrer Center": ["anaelle.breteche@epitech.eu", "ayele.sant-anna@epitech.eu"],
    //     "Communication": ["antoine.cocouvi@epitech.eu"],
    //     "Others": ["marc-uriel-zinsou.boko@epitech.eu", "boladji.odeloui@epitech.eu,"]
    // }

    if (validationResponse) {

        const ticketToSave = new Ticket({
            department: req.body.department,
            subject: req.body.subject,
            description: req.body.description,
            url_image: req.body.url_image,
            cc: req.body.cc
        });

        ticketToSave.save().then(() => {
            //get users of the department
            User.find({
                where: { departmentId: req.body.department }
            }).then((result) => {
                console.log(result);
                // if (result.length > 1) {
                result.forEach((user) => {
                    emails.push(user.email);
                });
                //delete last char
                //emails = emails.slice(0, -1);
                //
                // }
                // else {
                //     emails = emails.push(result.email);
                // }

                console.log("emails => " + emails);
            }).catch(error => res.status(500).json({ error: error }));



            const sujet = req.body.subject
            const description = req.body.description
            const cc = req.body.cc
            nodemailer.sendConfirmationEmail(["rigeladikan@gmail.com", "agbononcamel@gmail.com"], sujet, description, cc)
            return res.status(200).json({
                'success': true,
                "message": "Enrégistrement réussi"
            })

        }).catch(error => res.status(500).json({
            "success": false,
            "message": "Echec de l'enregistrement"
        }));
    } else {
        return res.status(500).json({
            "success": false,
            "message": "Données invalides"
        });
    }
}


function index(req, res) {

    Ticket.find().then((result) => {
        return res.status(200).json({
            'success': true,
            'tickets': result
        })
    }).catch((err) => {
        return res.status(500).json({
            "success": false,
            "message": "Un problème a été rencontré"
        });
    });
}


function show(req, res) {
    Ticket.findById(req.params.id).then((result) => {
        return res.status(200).json({
            'success': true,
            'ticket': result 
        })
    }).catch((err) => {
        return res.status(500).json({
            "success": false,
            "message": "Ticket introuvable"
        });
    });
}



function destroy(req,res){
    Ticket.findByIdAndRemove(req.params.id).then((result) => {
        console.log(result);
        if(result != null){
            res.status(200).json({
                'success': true,
                'message': "Suppression effectuée"
            })
        }
        else {
            res.status(500).json({
                "success": false,
                "message": "Ticket non disponible"
            });
        }
       
    }).catch((err) => {
       res.status(500).json({
            "success": false,
            "message": "Suppression impossible"
        });
    });
}

function updateStatus(req,res){
 
    Ticket.findByIdAndUpdate(req.params.id, {$set : req.body}).then((result) => {
        console.log(result.status);
        console.log("test => " + result);
        if(result){
            res.status(200).json({
                'success': true,
                'message': "Statut changé" 
            })
        }
        else{
            res.status(200).json({
                'success': true,
                'message': "Mise à jour impossible" 
            })
        }
    }).catch((err) => {
        return res.status(500).json({
            "success": false,
            "message": "Ticket introuvable"
        });
    });

}





function storeWithFile(req, res) {
    var emails = [];

    const ticket = {
        department: req.body.department,
        subject: req.body.subject,
        description: req.body.description,
        //url_image: req.body.url_image,
        cc: req.body.cc
    }

    console.log(ticket);

    const validator = new Validator();

    const schema = {
        department: { type: 'string', optional: false },
        subject: { type: 'string', optional: false },
        description: { type: 'string', optional: false },
        //url_image: { type: 'file', optional: true },
        cc: { type: "array", items: "email" }
    }

    const validationResponse = validator.validate(ticket, schema);
    //const validationResponse = true;

    // const departements = {
    //     "Bocal": ["daryl.medegan@epitech.eu", "emmanuel.solomon@epitech.eu"],
    //     "Finance ": ["jaures.gomez@epitech.eu", "judith-marielle.dossou-yovo@epitech.eu"],
    //     "Administrative": ["rockyath.amoussa@epitech.eu", "chistelle.houssou@epitech.eu", "emmanuel.solomon@epitech.eu"],
    //     "Pedagogy": ["irys1.gbessemehlan@epitech.eu", "daryl.medegan@epitech.eu", "emmanuel.solomon@epitech.eu", "lawal.alao@epitech.eu", "ghislain.gandjonon@epitech.eu"],
    //     "Directors": ["emmanuel.solomon@epitech.eu", "johannes.bruffaerts@epitech.eu", "jerôme.medegan@epitech.eu"],
    //     "Carrer Center": ["anaelle.breteche@epitech.eu", "ayele.sant-anna@epitech.eu"],
    //     "Communication": ["antoine.cocouvi@epitech.eu"],
    //     "Others": ["marc-uriel-zinsou.boko@epitech.eu", "boladji.odeloui@epitech.eu,"]
    // }

    if (validationResponse) {



        saveFile("") ;

        const ticketToSave = new Ticket({
            department: req.body.department,
            subject: req.body.subject,
            description: req.body.description,
            url_image: req.body.url_image,
            cc: req.body.cc
        });

        ticketToSave.save().then(() => {
            //get users of the department
            User.find({
                where: { departmentId: req.body.department }
            }).then((result) => {
                console.log(result);
                // if (result.length > 1) {
                result.forEach((user) => {
                    emails.push(user.email);
                });
                //delete last char
                //emails = emails.slice(0, -1);
                //
                // }
                // else {
                //     emails = emails.push(result.email);
                // }

                console.log("emails => " + emails);
            }).catch(error => res.status(500).json({ error: error }));



            const sujet = req.body.subject
            const description = req.body.description
            const cc = req.body.cc
            nodemailer.sendConfirmationEmail(["rigeladikan@gmail.com", "agbononcamel@gmail.com"], sujet, description, cc)
            return res.status(200).json({
                'success': true,
                "message": "Enrégistrement réussi"
            })

        }).catch(error => res.status(500).json({
            "success": false,
            "message": "Echec de l'enregistrement"
        }));
    } else {
        return res.status(500).json({
            "success": false,
            "message": "Données invalides"
        });
    }
}



module.exports =
{
    index: index,
    store: store,
    show: show,
    destroy : destroy,
    updateStatus : updateStatus
};

