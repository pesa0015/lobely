import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import books from './book';
import users from './user';
import profile from './profile';

export default combineReducers({
    form: formReducer,
    auth,
    books,
    users,
    profile
});
