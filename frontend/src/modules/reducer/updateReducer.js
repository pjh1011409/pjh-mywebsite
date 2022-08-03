import * as API from '../../api/Update' // api/posts 안의 함수 모두 불러오기

import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    reducerUtils,
} from '../../lib/asyncUtils'

import {
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
} from '../action/Action'

const initialState = {
    lastId: 0,
}

export const update = createPromiseThunk(UPDATE_POST, API.update)
export const updateDataId = createPromiseThunkById(
    UPDATE_POST,
    API.updateDataId
)
export const updateDataContents = createPromiseThunk(
    UPDATE_POST,
    API.dataContents
)

export const updates = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_SUCCESS:
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
