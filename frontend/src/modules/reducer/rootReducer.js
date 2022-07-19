import { combineReducers } from 'redux';
import {posts} from '../reducer/getReducer'
import {creates} from '../reducer/createReducer'
import {deletes} from '../reducer/deleteReducer'

const rootReducer = combineReducers({posts, creates, deletes});

export default rootReducer;