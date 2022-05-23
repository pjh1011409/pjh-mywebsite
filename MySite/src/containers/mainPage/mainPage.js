import Header from '../../components/common/Header/header'
import Footer from '../../components/common/Footer/footer'
import Profile from './profile'
import Information from './information'

import {Row} from 'react-bootstrap'
import styles from './mainPage.module.css'

function MainPage() {
  return (
    <div>
      <Header></Header>
      
      <Row className={styles.backGround}>
        <div className={styles.title}>Welcome To My Site!</div>
      </Row>
      
      <Profile></Profile>
      <Information></Information>
      <Footer></Footer>

    </div>
  );
}

export default MainPage;