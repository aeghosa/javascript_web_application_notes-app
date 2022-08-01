class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }
  
  displayNotes() {
    const notes = this.model.getNotes()

    // For each note, create and append a new element on the main container
    notes.forEach(note => {
      // line 11 says for each note created
      const noteEl = document.createElement('div');
      // line 13 dynamically creates a note elemt to the page, attaching new variable
      noteEl.innerText = note;
      // append the contents of the element
      noteEl.className = 'note';
      // assign a new class name
      this.mainContainerEl.append(noteEl);
      // state where on the page you want it to go
    })
  }
}

module.exports = NotesView