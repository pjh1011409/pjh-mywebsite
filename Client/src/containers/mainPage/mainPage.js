import Header from '../../components/common/Header/header'
import Footer from '../../components/common/Footer/footer'
import Title from './title/title'
import Profile from './profile/profile'
import Information from './information/information'
import MyStory from '../myStory/myStory'
import Project from '../project_/projects'
import Study from '../study/study'
import MyRecord from '../myRecord/myRecord'
import TechStack from '../techStack/techStack'
import React, {useRef, useState} from 'react';

function MainPage(){
  const mainRef = useRef(null); //represents main section
  const projecttRef = useRef(null); //represents about section
  const usageRef = useRef(null); /
  return(
    <div>
    <Header ref={scrollRef}></Header>
    <Title >
    </Title>
    <Profile></Profile>
    <Information></Information>
    <div ref={scrollRef}>
    <Project></Project>

    </div>
    </div>
   
  );
}

export default MainPage;
