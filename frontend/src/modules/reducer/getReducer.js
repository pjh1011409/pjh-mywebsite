import * as postsAPI from '../../api/Get' // api/posts 안의 함수 모두 불러오기
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../../lib/asyncUtils'
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
    UPDATE_GO,

} from '../action/Action'



// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
    posts: reducerUtils.initial(),
    post: {},
}


// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts)
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById)

export function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action)
        default:
            return state
    }
}

// export const getUpdateData = (state = initialState, action) =>{
//     switch(action.type){
//         case UPDATE_GO:
//             console.log(action.payload)
//             console.log("dddd")
//            return {...state, data: action.payload}
//         default:
//             return state
//     }

// }
