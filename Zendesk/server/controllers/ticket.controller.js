
const config = require('config');
const db = config.get('mongoURI');
const Validator = require('fastest-validator');
const Ticket = require('../models/ticket');
const nodemailer = require("../config/nodemailerTicket.config")
var nodeoutlook = require('nodejs-nodemailer-outlook')
//const { response } = require('..');


function store(req, res) {
    
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
        cc : {type: "array", items: "email"}
    }

    const validationResponse = validator.validate(ticket, schema);
    //const validationResponse = true;

 const departements = {
     "Bocal" : ["francky-gires.fanou@epitech.eu"],
     "Finance ":["jaures.gomez@epitech.eu","judith-marielle.dossou-yovo@epitech.eu"],
    "Administrative" : ["rockyath.amoussa@epitech.eu","chistelle.houssou@epitech.eu", "emmanuel.solomon@epitech.eu"],
    "Pedagogy" : ["irys1.gbessemehlan@epitech.eu","daryl.medegan@epitech.eu","emmanuel.solomon@epitech.eu","lawal.alao@epitech.eu","ghislain.gandjonon@epitech.eu"],
    "Directors" : ["emmanuel.solomon@epitech.eu","johannes.bruffaerts@epitech.eu","jerôme.medegan@epitech.eu"],
    "Carrer_Center" : ["anaelle.breteche@epitech.eu","ayele.sant-anna@epitech.eu"],
    "Communication" : ["antoine.cocouvi@epitech.eu"],
    "Others" : ["marc-uriel-zinsou.boko@epitech.eu","boladji.odeloui@epitech.eu"]
 
    
    }
    if (validationResponse) {
        
        const ticketToSave = new Ticket({
            department:  req.body.department,
            subject: req.body.subject,
            description: req.body.description,
            url_image: req.body.url_image,
            cc : req.body.cc
        });

        ticketToSave.save().then(() => {
           
           const email = departements[req.body.department]
           const sujet = req.body.subject
           const description = req.body.description
           const cc = req.body.cc
           nodemailer.sendConfirmationEmail(email,sujet,description,cc)
          return  res.status(200).json({
            'success': true,
            "message": "Enrégistrement réussi"
        })
       
        }).catch(error => res.status(500).json({error}));
    } else {
        return res.status(500).json({
            "success": false,
            "message": "Données invalides"
        });
    }
}


function index(req, res) {

    Ticket.find().sort({createdAt : 'asc'}).then((result) => {
      return  res.status(200).json({
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


function destroy(req, res) {

    Ticket.findById(req.params.id).then((result) => {
        Ticket.deleteOne({ _id: req.params.id})
        .then(() => {
            res.status(200).json({
                message: "Deleted!" ,
            });
        })
        .catch((error) => {
            res.status(400).json({
                error : error ,
            });
        });

    })

}







module.exports =
{
    index: index,
    store: store,
    show : show,
    destroy: destroy,
};

