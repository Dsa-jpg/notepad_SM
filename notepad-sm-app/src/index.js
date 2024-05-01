import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NoteContainer from './components/NoteContainer';
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteContainer />
  </React.StrictMode>
);
