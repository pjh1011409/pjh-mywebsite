import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faFile,
    faGraduationCap,
    faPhone,
    faEnvelope,
    faCakeCandles,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import styles from './information.module.css'

function Information() {
    const [icon, setIcon] = useState([
        faCakeCandles,
        faLocationDot,
        faPhone,
        faEnvelope,
        faGraduationCap,
        faFile,
    ])
    const [infoData, setInfoData] = useState([
        '1998.03.16',
        '수원시',
        '010-2854-5794',
        'pjh@naver.com',
        '컴퓨터공학전공',
        '이력서 보러가기',
    ])
    return (
        <div className={styles.infoBg}>
            <Row className={styles.information}>
                <Col sm>
                    <div className={styles.infoLayout}>
                        <Row>
                            {icon.map((icon, i) => {
                                return (
                                    
                                        <Col sm className={styles.info} key={i}>
                                            {' '}
                                            <FontAwesomeIcon
                                                icon={icon}
                                                style={{ marginBottom: '10px' }}
                                            />
                                            <h4>{infoData[i]}</h4>
                                        </Col>
                                    
                                )
                            })}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Information
