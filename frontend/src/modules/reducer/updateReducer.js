import * as API from '../../api/Update' // api/posts 안의 함수 모두 불러오기
import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    reducerUtils,
} from '../../lib/asyncUtils'

import {
    UPDATE_GO,
    UPDATE_GET,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
} from '../action/Action'

// export const updatePosting = (inputData) => {

//     return {
//         type: UPDATE_POST,
//         inputData: {
//             // id: inputData.id,
//             title: inputData.title,
//             sub_title: inputData.sub_title,
//             category: inputData.category,
//             body: inputData.body,
//         },

//     }

// }

const initialState = {
    lastId: 0,
    inputData: {},
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
export const updatePost = createPromiseThunk(UPDATE_POST, API.updatePost)

export const updates = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_SUCCESS:
        case UPDATE_GO:
        case UPDATE_POST:
            console.log(state)
            const indexOfData = state.findIndex(
                (data) => data.id === action.payload.id
            )
            let newState = [...state]
            newState[indexOfData] = action.payload
            return newState
        case UPDATE_POST_ERROR:
            return handleAsyncActions(
                UPDATE_POST,
                'updates',
                true
            )(state, action)

        default:
            return state
    }
}
