import React, { Fragment } from 'react';

const NoteViewer = ({selectedNote, handleClickEdit, deleteNote}) => {
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick={() => handleClickEdit(selectedNote)}>Edit</button>
      <button onClick={() => deleteNote(selectedNote)}>Remove</button>
    </Fragment>
  );
}

export default NoteViewer;
