import * as postsAPI from '../../api/Add' // api/posts 안의 함수 모두 불러오기

import { ADD_POST, ADD_POST_SUCCESS, ADD_POST_ERROR} from "../action/Action";

import { createPromiseThunk, handleAsyncActions } from '../../lib/asymcUtils';

export const addPost = createPromiseThunk(ADD_POST, postsAPI.addPost)

const initialState = [
    {
        id: 1,
        title: ' This is First Post',
        description: '포스팅 1',
    }
]