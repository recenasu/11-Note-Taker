// define variable for fs module for file system interaction.
const fs = require('fs');

// define variable for how to handle api requests. Currently, there is only one destination ('notes'), so this points directly to the file containing the functions handling those requests.
const api = require('./routes/index.js');


// define variable for importing "express" module for managing server and routes
const express = require('express');

// define variable to import 'path' package for working with files and directory paths
const path = require('path');

// define variable for ease of calling on the 'express' server function.
const app = express();

// Resolve incoming api requests to the api variable
app.use('/api', api);

// define a variable for the port number the server will communicate on. The first value is the deloyed system environment. If that returns false, the second port number value (3001) for the localhost dev environment will be used.
const PORT = process.env.PORT || 3001;

// Mount the 'express.static' middleware to serve the files in the 'Public' folder as static files. These files are served up to the client as they are on the server.
app.use(express.static('public')); 

// Mount the 'express.json' middleware for parsing incoming JSON data.
app.use(express.json());

// Mount the 'express.urlencoded' middleware for parsing incoming url encoded data using the qs library, which allows for encoding of arrays.
app.use(express.urlencoded({ extended: true }));


// Start the express listen function on the designated PORT. Print a status message to the console.
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})