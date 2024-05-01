import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ( { notes, onDelete, onEdit } ) => {
    // dekonstruje objekt notes z componenty NoteContainer abych nemusel pouzivat this.props.notes


    return (
        <div>
            <ul>
                {notes.map((note) => (
                     <NoteItem key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </ul>
        </div>
    );
}

export default NoteList;