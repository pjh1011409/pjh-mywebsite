import './App.css';
import {Container,Row, Col} from 'react-bootstrap';

import MainPage from './mainPage/mainPage';
import TechStack from './techStack/techStack'
import {Routes, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element = {<MainPage/>}/>
      <Route exact path='/techStack' element = {<TechStack/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
