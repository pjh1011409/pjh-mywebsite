
/* 액션 타입 */

// 포스트 여러개 조회하기
export const GET_POSTS = "GET_POSTS"; // 요청 시작
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
export const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_ERROR = "GET_POST_ERROR";




export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";


// 액션 생성 함수
export const addPosting = (title, description) => {
    return {
        type: ADD_POST,
        add: {
            id: nextId++,
            title,
            description
        }
    };
}