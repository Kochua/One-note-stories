import React, { Component} from 'react';

import './App.css';

import NoteEditor from './NoteEditor';

import NoteGrid from './NoteGrid';


class App extends Component {
    render() {
        return (
            <div className="container">
                <h2>Say your story</h2>
                <NoteEditor />
                <NoteGrid />
            </div>
        )
    }
}

export default App;