import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const store = configureStore({ reducer: rootReducer, middleware: [ReduxThunk, logger] });

// 만약 기본 미들웨어를 적용해야한다면
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

// redux-thunk : 비동기처리하기 위한 미들웨어, 액션 객체가 아닌 함수를 디스패치 가능
export default store;
