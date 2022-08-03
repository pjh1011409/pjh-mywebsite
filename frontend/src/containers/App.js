import './App.css'

import MainPage from './mainPage/mainPage'

import Login from './login/login'
import StudyWrite from './myRecord/skillStudy/studyWrite/studyWrite'
import StudyDetail from './myRecord/skillStudy/studyDetail/studyDetail'
import StudyUpdate from './myRecord/skillStudy/studyUpdate/studyUpdate'
import { Routes, Switch, Route, Router } from 'react-router-dom'
import MyRecord from './myRecord/myRecord'
// smooth scroll 설정

function App() {
    return (
        <div style={{margin: '0', width:'100vm',overflowX:'hidden'}}>
            <Routes>
                <Route exact path="/" element={<MainPage />} />

                <Route exact path="/login" element={<Login />} />

                {/* 위의 라우트들은 헤더에 있는 메인 페이지들에 대한 이동.
      하지만, 밑의 경우 myrecord페이지 하위 폴더인 skillStudy에서 글작성 눌렀을때 보이는 studyWrite페이지
      그렇다면 App에서 라우트하는 것이 아니라 skillStudy에서는 라우팅을 못시키나? */}
                <Route exact path="/studyWrite" element={<StudyWrite />} />

                <Route
                    exact
                    path="/studyDetail/:id"
                    element={<StudyDetail />}
                />
                <Route
                    exact
                    path="/studyUpdate/:id"
                    element={<StudyUpdate />}
                />

                <Route exact path="/myRecord/*" element={<MyRecord />} />
            </Routes>
        </div>
    )
}

export default App
