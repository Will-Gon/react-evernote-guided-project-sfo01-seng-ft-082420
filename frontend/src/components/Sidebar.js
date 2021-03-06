import React from 'react';
import NoteList from './NoteList';

const Sidebar = (props) => {

  const { notes, handleClick, createNote, filteredNotes } = props

    return (
      <div className='master-detail-element sidebar'>
        <NoteList 
        notes={notes}
        handleClick={handleClick}
        filteredNotes={filteredNotes}/>
        <button onClick={(e) => createNote(e)}>New</button>
      </div>
    );
}


export default Sidebar;
