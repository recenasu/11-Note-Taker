// define variable for importing "express" module for managing server and routes
const express = require('express');

// Define variable to import the modular router for the /notes api
const notesRouter = require('./notes');

// define variable for ease of calling on the 'express' server function.
const app = express();

// mounts the noutesRouter object for use when a request is received for the /notes api.
app.use('/notes', notesRouter);

// exports the app function
module.exports = app;