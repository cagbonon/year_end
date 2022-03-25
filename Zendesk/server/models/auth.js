const express = require("express");
const msal = require('@azure/msal-node');



const config = {
    auth: {
        clientId: "e638dbba-b109-4047-aa18-8b1d548cf372",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: "8e9986bf-f07e-48ad-949e-aff603a403c1"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

// Create msal application object
const cca = new msal.ConfidentialClientApplication(config);

app.get('/', (req, res) => {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:8080/redirect",
    };

    // get url to sign user in and consent to scopes needed for application
    cca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
});

app.get('/redirect', (req, res) => {
    const tokenRequest = {
    code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:8080/redirect",
    };

    cca.acquireTokenByCode(tokenRequest).then((response) => {
        console.log("\nResponse: \n:", response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
    res.status(500).send(error);
    });
});