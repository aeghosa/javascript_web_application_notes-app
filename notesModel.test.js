const NotesModel = require('./notesModel');

describe('NotesModel', () => {
// as a forgetful user, so i can remember what to do,
// I  would like to see what is currently on the notes

// as a forgetful user, so i can remember what to do,
// I  would like to add a new note to my notes

// as a forgetful user, so i can have a blank slate,
// I  would like to clear all my notes

  it('returns an empty notepad', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([])
  })

  it('adds a new note to notepad', () => {
    const model = new NotesModel();

    model.addNote('Buy milk');

    expect(model.getNotes()).toEqual(['Buy milk']);
  })

  it('clears all notes from notepad', () => {
    const model = new NotesModel();

    model.addNote('Buy milk');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  })
})




