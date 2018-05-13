import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import  * as actions from '../actions';
import './NoteGrid.css'



class NoteGrid extends Component {

    componentDidMount() {
        this.props.fetchNotes();
      }

      handleClick = ({title,_id}) => {
        const answer = prompt(`If you want delete "${title}" ? Enter the password: `);
        const password = '123';
        if(answer===password) {
            this.props.deleteNote(_id)
        } else { 
            alert('Incorrect password! ')
        }
      }
    
    renderNotes() {
        return this.props.notes.map(notes => {
            return (
                    <div 
                        key={notes._id} 
                        className="NoteGrid-card" 
                        style={{backgroundColor:notes.color}}
                        onDoubleClick={() => this.handleClick(notes)}
                        >
                        <h6>{notes.title}</h6>
                        <p>{notes.text}</p>
                    </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="NoteGrid">
                    {this.props.notes.length > 0
                    ?
                    this.renderNotes()
                    :
                    <div style={{margin:'40px auto'}}><ReactLoading type="spin" color="rgba(0, 0, 0, 0.692)" height={70} width={70} /></div>}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ notes }) {
    return { notes };
  }

export default connect(mapStateToProps, actions)(NoteGrid);