import * as API from '../../api/Delete' // api/posts 안의 함수 모두 불러오기
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById,
} from '../../lib/asyncUtils'

import {
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
} from '../action/Action'

const initialState = {
    lastId: 0,
    inputData: [reducerUtils.initial()],
}

export const deletePost = createPromiseThunkById(DELETE_POST, API.deletePost)

export const deletes = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_SUCCESS:
        case DELETE_POST:
            const inputData = [...state.inputData]
            const dataIndex = inputData.findIndex(
                (post) => post.id === action.payload
            )
            inputData.splice(dataIndex,1);
            return {...state, inputData}
        case DELETE_POST_ERROR:
            return handleAsyncActionsById(
                DELETE_POST,
                'deletes',
                true
            )(state, action)

        default:
            return state
    }
}
