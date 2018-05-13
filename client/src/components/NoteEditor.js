import React, {Component} from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import * as actions from '../actions';
import "./NoteEditor.css";

class NoteEditor extends Component {
    constructor(props) {
        super(props)

        this.state = {
                title: '',
                text: '',
                color: '#fff'

          
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    } 

    handleChangeColor(color) {
        this.setState({color});
    }


    onSubmit(e) {
        e.preventDefault()
        const {title,text,color} = this.state
        const values = {
            title,
            text,
            color
        }

        this.props.postNotes(values)
        
    }

    render() {
        return (
            <div className="NoteEditor">
            <form onSubmit={this.onSubmit}>
                <input
                value={this.state.title}
                onChange={this.onChange}
                name="title"
                className="NoteEditor-input"
                placeholder="Enter title"
                type="text" 
                />
                <textarea
                    value={this.state.text}
                    onChange={this.onChange}
                    name="text"
                    className="NoteEditor-text"  
                    placeholder='Enter note text'
                    rows={5}
                />
                <div className="NoteEditor-footer">
                    <ColorPicker changeColor={this.handleChangeColor.bind(this)}/>
                    <button 
                        type="submit" 
                        className="NoteEditor-btn"
                        disabled={!this.state.text}
                        >
                    Add
                    </button>
                </div>
                </form>
            </div>
        )
    }
}


export default connect(null, actions)(NoteEditor);