import {combineReducers} from 'redux';
import auth from './auth';
import books from './book';

export default combineReducers({
    auth,
    books
});
