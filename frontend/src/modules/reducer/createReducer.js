import * as postsAPI from '../../api/Create' // api/posts 안의 함수 모두 불러오기
import {
    createPromiseThunk,
    handleAsyncActions,
    reducerUtils
} from '../../lib/asyncUtils'

import {
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
   
} from '../action/Action'

 export const createPost = createPromiseThunk(CREATE_POST, postsAPI.createPost)

export const createPosting = (inputData) => {

    return {
        type: CREATE_POST,
        inputData: {
            // id: inputData.id,
            title: inputData.title,
            sub_title: inputData.sub_title,
            category: inputData.category,
            body: inputData.body,
        },
    
    }

}

const initialState = {
    lastId: 0,
    inputData: [reducerUtils.initial()],
}
// const initialState = {
//     lastId: 0,
//     inputData: [
//         {
//             // id: '',
//             title: '',
//             sub_title: '',
//             category: '',
//             body: '',
//         },
//     ],
// }

export const creates = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_SUCCESS:
        case CREATE_POST:
            return {
                // lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    // id: state.lastId + 1,
                }),
            }
        case CREATE_POST_ERROR:
            return handleAsyncActions(
                CREATE_POST,
                'creates',
                true
            )(state, action)

        default:
            return state
    }
}
