import React from "react";

const NoteItem = ({ note, onDelete }) => {

    const handleDelete = () => {
        onDelete(note.id);
    };


    return (
        <div>
            <li>{note.content}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};


export default NoteItem;