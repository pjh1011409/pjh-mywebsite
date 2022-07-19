import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBlogger,
    faGithub,
    faFacebook,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'

import { Row, Col } from 'react-bootstrap'

import styles from './profile.module.css'

function Profile(props) {
    return (
        <div className={styles.profileBackgr}>
            <div className={styles.wrapper1}>
                <div className={styles.bg}> Hi Everyone </div>
                <div className={styles.fg}> Hi Everyone </div>
            </div>

            <div className={styles.wrapper2}>
                <div className={styles.bg}> Welcome To My World </div>
                <div className={styles.fg}> Welcome To My World </div>
            </div>
            <div className={styles.wrapper3}>
                <div className={styles.bg}> I'm a FrontEnd Developer </div>
                <div className={styles.fg}>I'm a FrontEnd Developer </div>
            </div>
            <div className={styles.btnGrid}>
                <button
                    onClick={() => props.handleIndexClick(0)}
                    className={styles.aboutMore}
                >
                    About Me
                </button>
            </div>

            {/* <Row style={{ margin: "0 auto"}}>
      
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
    </Row> */}
        </div>
    )
}

export default Profile
