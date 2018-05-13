import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import notesReducer from './notesReducer';

export default combineReducers ({
    notes: notesReducer,
    form: reduxForm
});