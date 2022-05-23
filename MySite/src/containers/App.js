import './App.css';
import {Container,Row, Col} from 'react-bootstrap';

import MainPage from './mainPage/mainPage';
import TechStack from './techStack/techStack';
import Projects from './project_/projects'
import MyStory from './myStory/myStory';
import Study from './study/study'
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
      </Routes>
      
    </div>
  );
}

export default App;
