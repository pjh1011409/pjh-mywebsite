import Header from '../../components/common/Header/header'
import Footer from '../../components/common/Footer/footer'
import Title from './title'
import Profile from './profile'
import Information from './information'

function MainPage() {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <Profile></Profile>
      <Information></Information>
      <Footer></Footer>

    </div>
  );
}

export default MainPage;