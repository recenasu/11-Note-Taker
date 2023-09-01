// define variable for fs module for file system interaction.
const fs = require('fs');

// define variable for how to handle api requests. This points to the routes/index.js file containing pointers to the different api router objects (currently, there is only one: "notes").
const api = require('./routes/index.js');

// define variable for importing "express" module for managing server and routes
const express = require('express');

// define variable to import 'path' package for working with files and directory paths
const path = require('path');

// define variable for ease of calling on the 'express' server function.
const app = express();

// define a variable for the port number the server will communicate on. The first value is the deloyed system environment. If that returns false, the second port number value (3001) for the localhost dev environment will be used.
const PORT = process.env.PORT || 3001;

// Mount the 'express.static' middleware to serve the files in the 'Public' folder as static files. These files are served up to the client as they are on the server.
app.use(express.static('public')); 

// Mount the 'express.json' middleware for parsing incoming JSON data.
app.use(express.json());

// Mount the 'express.urlencoded' middleware for parsing incoming url encoded data using the qs library, which allows for encoding of arrays.
app.use(express.urlencoded({ extended: true }));

// Resolve incoming api requests to the api variable
app.use('/api', api);


// Define a GET Route to serve the index.html page (the homepage)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Define a GET route to serve the notes.html page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// Start the express listen function on the designated PORT. Print a status message to the console.
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})