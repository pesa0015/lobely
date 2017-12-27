import {combineReducers} from 'redux'
import token from './login'
import book from './book'

export default combineReducers({
    auth: token,
    book: book
});