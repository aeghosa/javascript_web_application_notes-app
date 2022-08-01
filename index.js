const NotesModel = require("./notesModel");
const NotesView = require("./NotesView");

// 1. Setup the model with one note
const model = new NotesModel();
model.addNote('Te notes app is running');

// 2. Setup the view
const view = new NotesView(model);

// 3. Make the view display notes
view.displayNotes();