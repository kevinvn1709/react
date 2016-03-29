import { combineReducers } from 'redux';
import PostReducer from '../modules/posts/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    posts: PostReducer,
});

export default rootReducer;
