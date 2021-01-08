import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const URL = 'http://localhost:3000/api/v1/notes'

class App extends Component {

  state = {
    notes: [],
    selectedNote: null,
    editNote: false,
    filteredNotes: ''
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(notes => {
      this.setState({
        notes
      })
    })
  }

  handleClick = (note) => {
    this.setState({
      selectedNote: note,
      editNote: false
    })
  }

  createNote = () => {
    let placeholder = {
      title: 'Add a title',
      body: 'Add a note',
      user_id: 1
    }
    this.postNote(URL, placeholder)
    .then(placeholder => this.setState({
      notes: [placeholder, ...this.state.notes],
      selectedNote: placeholder
    }))
  }

  postNote = (URL, placeholder) => {
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(placeholder)
    })
    .then(res => res.json())
  }

  handleClickEdit = (note) => {
    this.setState({
      editNote: true
    })
  }

  handleCancelEdit = (note) => {
    this.setState({
      editNote: false
    })
  }

  handleEditSave = (e, selectedNote) => {
    e.preventDefault()
    return fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(selectedNote)
    })
    .then(res => res.json())
    .then(note => {
      const updatedNote = this.state.notes.map(n => n.id === note.id ? note : n)
      this.setState({
        notes: updatedNote, editNote: false, selectedNote: null
      })
    })
  }

  handleSearch = (value) => {
    this.setState({
      filteredNotes: value
    })
  }

  filteredNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.filteredNotes.toLowerCase()))
  }

  deleteNote = (note) => {
     return fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(note => {
      this.setState((prevState) => ({
        selectedNote: null,
        notes: prevState.notes.filter((n) => n.id !== note.noteId)
      }))
    })
  }

  render() {

    const { notes, selectedNote, editNote } = this.state
    const { handleClick, createNote, handleClickEdit, handleEditSave, handleCancelEdit, handleSearch, filteredNotes, deleteNote } = this

    return (
      <div className="app">
        <Header />
        <NoteContainer 
        notes={notes}
        selectedNote={selectedNote}
        editNote={editNote}
        handleClick={handleClick}
        createNote={createNote}
        handleClickEdit={handleClickEdit}
        handleEditSave={handleEditSave}
        handleCancelEdit={handleCancelEdit}
        handleSearch={handleSearch}
        filteredNotes={filteredNotes()}
        deleteNote={deleteNote}
        />
      </div>
    );
  }
}

export default App;
