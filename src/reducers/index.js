import { combineReducers } from 'redux';

import PostReducer from './postReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: PostReducer,
    user: userReducer
});