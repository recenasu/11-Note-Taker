// define variable for importing "express" module for managing server and routes
const express = require('express');

// define variable to import 'path' package for working with files and directory paths
const path = require('path');

// define variable for ease of calling on the 'express' server function.
const app = express();

// define a variable for the port number the server will communicate on.
const PORT = 3001;

// Use 'express.static' to serve the files in the 'Public' folder as static files. These files are served up to the client as they are on the server.
app.use(express.static('public')); 