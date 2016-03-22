import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';
import UserReducer from './user_reducer';
import ActiveBookReducer from './active_book_reducer';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer,
    user: UserReducer
});

export default rootReducer;
