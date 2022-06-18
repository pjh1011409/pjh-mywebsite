import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger,faGithub, faFacebook, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

import {Row, Col} from 'react-bootstrap'

import styles from './profile.module.css'

function Profile() {   

  return (
    <div style={{backgroundColor:"aliceblue"}}>
   <Row style={{ margin: "0 auto"}}>
      <Col sm>
        <img className={styles.myPhoto} src="assets/images/profile/박정호.jpeg"></img>
      </Col>
      <Col md="auto">
        <div className={styles.profile}>
          <h1>박정호</h1>
          <h4>ParkJeongHo</h4>
          <br></br>

          <h4>FE Developer</h4>
          <br></br>

          <ul className={styles.icons}>
            <li style={{ float: "left" }}>
              {" "}
              <img
                className={styles.icon}
                src="/assets/images/icons/github-icon.png"
              ></img>
            </li>
            <li style={{ float: "left" }}>
              {" "}
              <img
                className={styles.icon}
                src="/assets/images/messenger/velog-icon.png"
              ></img>
            </li>
            <li style={{ float: "left" }}>
              {" "}
              <img
                className={styles.icon}
                src="/assets/images/messenger/facebook-icon.png"
              ></img>
            </li>
            <li style={{ float: "left" }}>
              {" "}
              <img
                className={styles.icon}
                src="/assets/images/messenger/instagram-icon.png"
              ></img>
            </li>
            <li style={{ float: "left" }}>
              {" "}
              <img
                className={styles.icon}
                src="/assets/images/messenger/notion-icon.png"
              ></img>
            </li>
          </ul>
        </div>
      </Col>
      <Col sm className={styles.introduce}>
        <h4>Introduce</h4>
        <span>
          안녕하세요 저는 프론트엔드 개발자를 꿈꾸고 있습니다!~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </span>
      </Col>
    </Row>
    </div>
 
  );
}

export default Profile;