import React, { useState } from "react";
import NoteList from "./NoteList";
import Header from "./Header";
import Footer from "./Footer";
import InputNote from "./InputNote";


const NoteContainer = () => {

    const [notes, setNotes] = useState([
        { id: 1, content: "This is a note" },
        { id: 2, content: "This is another note" },
        { id: 3, content: "This is a third note" },

    ]);

    const addNote = (content) => {
        const newNote = {
            id: notes.length + 1,
            content: content,
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };
    
    const editNote = (id, newContent) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, content: newContent } : note
            )
        );
    };
    

    return (
        <div>
            <Header />
            <InputNote addNote={addNote} />
            <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
            <Footer />
        </div>
    );
};


export default NoteContainer;