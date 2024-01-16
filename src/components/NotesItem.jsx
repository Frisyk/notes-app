import React from 'react'
import NotesBody from './NotesBody'
import NotesButton from './NotesButton'

const NotesItem = ({id, placeHolder, title, createdAt, body, onDelete, onArchive}) => {
  return (
    <div className="note-item">
        <NotesBody title={title} createdAt={createdAt} body={body}/>
        <NotesButton id={id} placeHolder={placeHolder} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NotesItem