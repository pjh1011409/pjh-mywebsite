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
function MainPage() {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <Profile></Profile>
      <Information></Information>
      <TechStack></TechStack>
      <Project></Project>
      <MyStory></MyStory>
      <Study></Study>
      <Footer></Footer>

    </div>
  );
}

export default MainPage;