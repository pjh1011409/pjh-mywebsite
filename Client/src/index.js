import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './containers/App'
import reportWebVitals from './test/reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer'
import logger from 'redux-logger'
import myLogger from './middlewares/myLogger'
const root = ReactDOM.createRoot(document.getElementById('root'))
const store = configureStore({
    reducer: rootReducer,
    middleware: [logger, myLogger],
})

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
