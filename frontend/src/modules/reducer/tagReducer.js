import { ADD_TAG } from '../action/Action'

const initialState = {}

export const addTag = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TAG:
            console.log(action.payload)
           return action.payload
        default:
            return state
    }

}