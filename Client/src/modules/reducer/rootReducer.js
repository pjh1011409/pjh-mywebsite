import { combineReducers } from 'redux';
import {posts} from '../reducer/getReducer'

const rootReducer = combineReducers({posts});

export default rootReducer;