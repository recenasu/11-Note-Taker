# 11-Note-Taker
This is Rick's Module 11 project to create the backend of a note taker app

# Challenge-11 - Express.js: Note Taker

## Description
The purpose of this project is to modify starter code to create an application for taking notes. The application uses an Express.js back end and saves and retrieves note data from a JSON file. Acceptance Criteria have been broken down into individual features (e.g. AC01). For details on the implementation, review the applicable 'Usage' section of this README.

### User Story

* AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Acceptance Criteria

>* GIVEN a note-taking application

>* AC01: Landing Page 
>    -	WHEN I open the Note Taker
>    -	THEN I am presented with a landing page with a link to a notes page

>* AC02: Retrieve Note Data from Server
>    -	WHEN I click on the link to the notes page
>    -	THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

>* AC03: New Note Entry
>    -	WHEN I enter a new note title and the note’s text
>    -	THEN a Save icon appears in the navigation at the top of the page

>* AC04: Store New Note Data on Server
>    -	WHEN I click on the Save icon
>    -	THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

>* AC05: Note Selection and Display
>    -	WHEN I click on an existing note in the list in the left-hand column
>    -	THEN that note appears in the right-hand column

>* AC06: Initiate New Note Entry 
>    -	WHEN I click on the Write icon in the navigation at the top of the page
>    -	THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

>* AC07: *BONUS DELETE NOTE FUNCTION*
>    - WHEN I click on the trash can icon for a note in the notes list
>    - THEN the note is removed from the list (i.e. the server database file)

## Installation

> * To launch the app, open the browser and paste the following URL in the address bar, or click on the link: https://guarded-beach-42865-be5f35ddba24.herokuapp.com/
> * To access the project repo, open the browser and paste the following URL in the address bar, or click on the link: https://github.com/recenasu/11-Note-Taker

## Usage

> * Open the Chrome browser and navigate to the app URL https://guarded-beach-42865-be5f35ddba24.herokuapp.com/
> * On the Note Taker landing page, click "Get Started" (AC01)
> * On the Notes page, review the existing notes on the left side of the display (AC02)
> * Type a new note title and text in the fields provided 
> * Click the Save icon in the upper right of the display (AC03)
> * Confirm that the new note is now listed with the notes on the left side of the display. (AC04) 
> * Click on a different note in the list.
> * Confirm the note title and text appear in the main area of the display (AC05)
> * Click on the + icon in the upper right of the display
> * Confirm the main area clears the selected note to allow for new note entry (AC06)
> * Click on the trash can icon for one of the notes in the notes list.
> * Confirm the note is removed from the list (AC07)

The following images show the application sequence.

> * Note Taker Landing Page
![Exhibit 1](./assets/Screen1.png)
> * Existing Notes Listed 
![Exhibit 2](./assets/Screen2.png)
> * New Note Entered
![Exhibit 3](./assets/Screen3.png)
> * New Note Saved
![Exhibit 4](./assets/Screen4.png)
> * Another Note Selected and Displayed
![Exhibit 5](./assets/Screen5.png)
> * Add Note Icon Clicked For New Note Entry
![Exhibit 6](./assets/Screen6.png)
> * "Pack for Trip" note Deleted
![Exhibit 7](./assets/Screen7.png)



## Credits

> * npm Express v4.16.4 module was used for creating and managing routes.
