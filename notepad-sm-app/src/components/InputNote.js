import React from "react";
import { useState } from "react";

const InputNote = ({ addNote }) => {

    // dekonstruje objekt addNote z componenty NoteContainer abych nemusel pouzivat this.props.addNote
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== "") {
            addNote(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your note"
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default InputNote;
