import { combineReducers } from 'redux';
import {posts} from '../reducer/getReducer'
import {creates} from '../reducer/createReducer'
import {deletes} from '../reducer/deleteReducer'
import {updates} from '../reducer/updateReducer'
import {getUpdateData} from '../reducer/updateReducer'
import {addTag} from '../reducer/tagReducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ["getUpdateData"]
    // blacklist -> 그것만 제외합니다
  };
  

const rootReducer = combineReducers({posts, creates, deletes, updates, getUpdateData, addTag});

export default persistReducer(persistConfig, rootReducer);
