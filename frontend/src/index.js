import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './containers/App'
import reportWebVitals from './test/reportWebVitals'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './modules/store/store'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
        </HashRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
