/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesView = require('./NotesView');
 const NotesModel = require('./notesModel'); 

 document.body.innerHTML = fs.readFileSync('./index.html');

 describe('Notes view', () => {
   it('displays two notes', () => {
   const model = new NotesModel();
   const view = new NotesView(model);
   model.addNote('first note');
   model.addNote('second note');

   view.displayNotes();

   expect (document.querySelectorAll('div.note').length).toEqual(2);
   });
 }); 