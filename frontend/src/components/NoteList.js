import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const { handleClick, filteredNotes } = props

  return (
    <ul>
      {filteredNotes.map((note) => (
        <NoteItem 
        key={note.id}
        note={note}
        handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default NoteList;
