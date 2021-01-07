import React from 'react';

const NoteItem = ({note, handleClick}) => (
  <li onClick={() => handleClick(note)}>
    <h2>{note.title}</h2>
    <p>{note.body.slice(0, 20) + ('...')}</p>
  </li>
);

export default NoteItem;
