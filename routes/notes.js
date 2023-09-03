// Define variable for import of express router function
const notes = require('express').Router();

// define variables for file functions imported from helpers/fsUtils
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// define variable for importing id generator function from helpers/uuid
const uuid = require('../helpers/uuid');

// ***RETRIEVE NOTES***
// Define the GET route for retrieving the notes in the db file to populate the notes page.
notes.get('/', (req, res) => {
    // use the readFromFile function to get the contents of the db.json file containing the notes array. The returned data is then converted to json, and then parsed for use in the destination html page.
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// ***POST A NEW NOTE***
// Define the POST route for adding a new note to the db file.
notes.post('/', (req, res) => {
    console.log(req.body);

    // Define two variables to receive the title and text key value pairs from the request body. 
    const { title, text } = req.body;

    // If the request exists, create a newNote object containing the two variables above and an id key with a value randomly generated by the helper function. The id is needed so that each note in the db file will have a unique key. Also, the shorthand is used for assigning the keys in the newNote object, since the same names are being used. 
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        // Use the helper function 'readAndAppend' to read the array in the db file and append the newNote object to the array. Print success messages.
        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
        console.info('Note added successfully');
    } else {
        // Print failure messages if the above failed.
        res.error('Error adding note');
        console.info('Error adding note');
    }
});

// ***DELETE A NOTE***
// Define the DELETE route for removing a note from the db file.
notes.delete('/:id', (req, res) => {
    // console.log(req.body);

    // Define variable for the note id request parameter. 
    const requestedID = req.params.id;
    console.info(requestedID);

    // Define an global empty array variable to receive the parsed contents of the db.json file. Then use the readFromFile helper function to parse the db.json file. Assign the resulting data to the variable.
    var currentNotes = [];
    readFromFile('./db/db.json').then((data) => {
        currentNotes = JSON.parse(data);
        console.info(currentNotes);


        // For loop to search the array for a match to the requestedID.
        for (i = 0; i < currentNotes.length; i++) {
            if (requestedID === currentNotes[i].id) {

                // Remove the item from the array
                currentNotes.splice(i, 1);
                console.info(currentNotes);

                // Use the writeToFile helper function to stringify the array and write over the existing db.json file.
                writeToFile('./db/db.json', currentNotes);

                // Print success messages
                res.json('Note deleted successfully');
                console.info('Note deleted successfully');
            };

        };
    });
});
// Export the 'notes' modular router for use as 'notesRouter' in the '/index.js file.
module.exports = notes;


