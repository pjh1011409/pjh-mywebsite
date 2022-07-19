// action type 설정
const URI_SAVE = 'URI_SAVE';
 
// 버튼 클릭 시 호출될 함수
export const uriSave = (inputData) => ({
    type: URI_SAVE,
    inputData: inputData
})
 
// data 초기화
const initialState = {
    inputData: '/'
}
 
// store 에 실질적으로 저장해주는 reducer
export default function uriReducer(state = initialState, action){
    switch(action.type) {
        case URI_SAVE:
            return Object.assign({}, state, {
                inputData: action.inputData
            })
 
        default:
            return state
    }
}