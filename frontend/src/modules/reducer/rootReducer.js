import { combineReducers } from 'redux';
import {posts} from '../reducer/getReducer'
import {creates} from '../reducer/createReducer'
import {deletes} from '../reducer/deleteReducer'
import {updates} from '../reducer/updateReducer'

const rootReducer = combineReducers({posts, creates, deletes, updates});

export default rootReducer;