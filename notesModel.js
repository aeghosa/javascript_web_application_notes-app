class NotesModel {
  constructor() {
    this.blankPage = [];
  }

  getNotes()  {
    return this.blankPage
  }

  addNote(title) {
    this.blankPage.push(title);
  }

  reset(title) {
    this.blankPage = [];
  }
}


module.exports = NotesModel;