import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faFile,faGraduationCap ,faPhone, faEnvelope, faCakeCandles, faLocationDot  } from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from 'react-bootstrap'

import styles from './information.module.css'


function Information(){
    return(
        <div className={styles.infoBg}>
             <Row className={styles.information}>
        <Col sm>
          <div className={styles.infoLayout}>
            <Row>
              <Col sm className={styles.info}>
                {" "}
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  style={{ marginBottom: "10px" }}
                />
                <h4>1998.03.16</h4>
              </Col>
              <Col sm className={styles.info}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ marginBottom: "10px" }}
                />
                <h4> 수원시 권선구 거주</h4>
              </Col>
              <Col sm className={styles.info}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginBottom: "10px" }}
                />
                <h4> 010-2854-5794</h4>
              </Col>
            </Row>
            <Row>
              <Col sm className={styles.info}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginBottom: "10px" }}
                />
                <h4>pjh31208@naver.com</h4>
              </Col>
              <Col sm className={styles.info}>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ marginBottom: "10px" }}
                />
                <h4>컴퓨터공학 전공</h4>
              </Col>
              <Col sm className={styles.info}>
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ marginBottom: "10px"}}
                />
                <h4>이력서 보러가기</h4>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
        </div>
    )
}

export default Information;