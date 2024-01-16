import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
import NotesList from './NotesList';
import Header from './Header';
import NotesAddForm from './NotesAddForm';

 
class NotesApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData().map(note => {
      return { ...note, createdAt: showFormattedDate(note.createdAt) };
     }),
     searchValue: "",
   }
 
   this.onSearchValueChange = this.onSearchValueChange.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onArchiveHandler = this.onArchiveHandler.bind(this);
 }

 onSearchValueChange() {
  this.setState(() => {
    return {
      searchValue: event.target.value,
    }
  });
 }

 onAddNoteHandler({ title, body }) {
  const createdAt = showFormattedDate(new Date())
  this.setState((prevState) => {
    if(title !== "" && body !== "") {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived: false
          }
        ]
      }
    } else {
      alert("lengkapi dulu yaa :)")
    }
  });
}
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }

 onArchiveHandler(id) {
  const updatedNotes = this.state.notes.map(note => {
    if (note.id === id) {
      if(!note.archived){
        return { ...note, archived: true };
      } else {
        return { ...note, archived: false}
      }
    }
    return note;
  });
  this.setState({ notes: updatedNotes });
}
 
 render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);


   return (
    <div className="notes-app">
      <Header value={this.state.searchValue} onSearchChange={this.onSearchValueChange}/>
        <div className="note-app__body">
          <NotesAddForm addNote ={this.onAddNoteHandler}/>
          <h2>Catatan Aktif</h2>
          <div>
            {
              activeNotes.length? <NotesList notes={activeNotes} placeHolder={"Arsipkan"} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
              : <p className='notes-list__empty-message'>Tidak ada catatan</p>
            }
          </div>
          <h2>Arsip</h2>
          <div>
            {
              archivedNotes.length? <NotesList notes={archivedNotes} placeHolder={"Pindahkan"} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
              : <p className='notes-list__empty-message'>Tidak ada catatan</p>
            }
          </div>
        </div>
    </div>
   );
 }
}
 
export default NotesApp;