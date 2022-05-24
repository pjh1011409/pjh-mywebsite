import './App.css';
import {Container,Row, Col} from 'react-bootstrap';

import MainPage from './mainPage/mainPage';
import TechStack from './techStack/techStack';
import Projects from './project_/projects'
import MyStory from './myStory/myStory';
import Study from './study/study'
import MyRecord from './myRecord/myRecord'
import Login from './login/login'
import StudyWrite from './myRecord/skillStudy/studyWrite/studyWrite';
import {Routes, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element = {<MainPage/>}/>
      <Route exact path='/techStack' element = {<TechStack/>}/>
      <Route exact path='/projects' element = {<Projects/>}/>
      <Route exact path='/myStory' element = {<MyStory/>}/>
      <Route exact path='/study' element = {<Study/>}/>
      <Route exact path='/myRecord' element = {<MyRecord/>}/>
      <Route exact path='/login' element = {<Login/>}/>

      {/* 위의 라우트들은 헤더에 있는 메인 페이지들에 대한 이동.
      하지만, 밑의 경우 myrecord페이지 하위 폴더인 skillStudy에서 글작성 눌렀을때 보이는 studyWrite페이지
      그렇다면 App에서 라우트하는 것이 아니라 skillStudy에서는 라우팅을 못시키나? */}
      <Route exact path="/studyWrite" element={<StudyWrite/>} />



      </Routes>
      
    </div>
  );
}

export default App;
