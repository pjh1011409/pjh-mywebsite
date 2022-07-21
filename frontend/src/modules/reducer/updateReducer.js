import * as API from '../../api/Update' // api/posts 안의 함수 모두 불러오기
import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    reducerUtils,
} from '../../lib/asyncUtils'

import {
    UPDATE_GO,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
} from '../action/Action'


const initialState = {
    lastId: 0,
    inputData: {},
}

export const updatePost = createPromiseThunkById(UPDATE_POST, API.updatePost)

export const updates = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_SUCCESS:
        case UPDATE_GO:
        case UPDATE_POST:
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
