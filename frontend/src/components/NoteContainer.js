import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    const { notes, selectedNote, handleClick, createNote, handleClickEdit, editNote, handleEditSave, handleCancelEdit, handleSearch, filteredNotes, deleteNote } = this.props
    return (
      <Fragment>
        <Search 
        handleSearch={handleSearch}
        />
        <div className='container'>
          <Sidebar 
          notes={notes}
          handleClick={handleClick}
          createNote={createNote}
          filteredNotes={filteredNotes}
          />
          <Content 
          selectedNote={selectedNote}
          handleClickEdit={handleClickEdit}
          editNote={editNote}
          handleEditSave={handleEditSave}
          handleCancelEdit={handleCancelEdit}
          deleteNote={deleteNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
