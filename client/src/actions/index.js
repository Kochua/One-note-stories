import axios from 'axios';
import { FETCH_NOTES} from './types';

export const fetchNotes = () => async dispatch => {
    const res = await axios.get('/api/notes');

    dispatch({ type: FETCH_NOTES, payload: res.data})
}


export const postNotes = values => async dispatch => {
    const res = await axios.post('/api/notes', values);

   
    if(res.data == 'yes') {
        window.location = '/'
        return alert('შენ უკვე დაწერე დღეს, სცადე ხვალ!')
    } else {
        window.location = '/'
        dispatch({ type: FETCH_NOTES, payload: res.data})
    }
      

  };

  
export const deleteNote = id => async dispatch => {
    const res = await axios.delete('/api/notes/' + id);

    window.location = '/'
    dispatch({ type: FETCH_NOTES, payload: res.data})
  };
  
  