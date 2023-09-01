// Define variable for import of express router function
const notes = require('express').Router();

// define variables for file functions imported from helpers/fsUtils
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

// define variable for importing id generator function from helpers/uuid
const uuid = require('./helpers/uuid');

// Define the GET route for the notes page.
notes.get('/notes', (res, req) => {
    // use the readFromFile function to get the contents of the db.json file containing the notes array. The returned data is then converted to json, and then parsed for use in the destination html page.
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

module.exports = notes;


