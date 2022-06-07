import { combineReducers } from 'redux';
import counter from '../reducer/counter';

const rootReducer = combineReducers({ counter });

export default rootReducer;