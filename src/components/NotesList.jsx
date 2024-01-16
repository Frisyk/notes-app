import React from 'react'
import NotesItem from './NotesItem'

const NotesList = ({notes, placeHolder, onDelete, onArchive}) => {
  return (
    <div className="notes-list">
        {
            notes.map((note) => (
                <NotesItem
                    key={note.id} 
                    id={note.id}
                    placeHolder={placeHolder}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note}
                />
            ))
        }
    </div>
  )
}

export default NotesList