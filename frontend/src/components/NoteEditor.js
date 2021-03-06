import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body,
    id: this.props.selectedNote.id
  }

  handleEdit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { handleEditSave, handleCancelEdit } = this.props
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.title} onChange={this.handleEdit}/>
        <textarea name="body" value={this.state.body} onChange={this.handleEdit}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={(e) => handleEditSave(e, this.state)}/>
          <button onClick={() => handleCancelEdit(this.state)} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
