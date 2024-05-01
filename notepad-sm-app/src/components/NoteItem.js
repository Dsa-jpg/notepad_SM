import React, {useState} from "react";

const NoteItem = ({ note, onDelete, onEdit }) => {


    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(note.content);

    const handleDelete = () => {
        onDelete(note.id);
    };

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setEditText(event.target.value);
    };

    const handleBlur = () => {
        if (editText.trim() !== "") {
            onEdit(note.id, editText);
        }
        setIsEditing(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleBlur();
        }
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <div onDoubleClick={handleDoubleClick}>
                    <span>{note.content}</span>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};


export default NoteItem;