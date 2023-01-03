// ----------------react & hooks-------------------------------------
import React from 'react';
// ----------------style & css---------------------------------------
import './App.css';

// ----------------components & data---------------------------------
import { Header } from 'components/common';
import MainPage from './mainPage/mainPage';
// ------------------authentication(utils & context)---------------------------

function App() {
  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
