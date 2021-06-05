'use strict';
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
const { parse } = require('dotenv');
app.use(
	auth({
	authRequired:true,
	auth0Logout:true,
	issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);
app.get('/',  (req,res)=>{
    res.sendFile(path.join(__dirname,'adda/index.html'));
})
app.get('/callback', (req,res)=>{
    res.sendFile(path.join(__dirname,'adda/logout.html'))
})

app.use(express.static(path.join(__dirname, 'adda')));

const port = process.env.PORT || 3000;
app.listen(port, function(req,res){
	console.log(`Running on port ${port}...\n Ctr C to quit..`);
});

