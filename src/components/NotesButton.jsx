import React from "react";

function NotesButton({id, placeHolder, onDelete, onArchive}) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onArchive(id)}>{placeHolder}</button>
        </div>
    )
}

export default NotesButton;