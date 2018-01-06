import {combineReducers} from 'redux';
import auth from './auth';
import books from './book';
import users from './user';

export default combineReducers({
    auth,
    books,
    users
});
