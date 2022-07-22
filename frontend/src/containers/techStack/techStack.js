import styles from './techStack.module.css'
import { Row, Col } from 'react-bootstrap'
import {useState} from 'react'
import TechStackData from './techStackData'
function TechStack() {

    const [stack, setStack] = useState(TechStackData);
    return (
        <div className={styles.techBg}>
            <div className={styles.tech}>
                <Row className={styles.row}>

        
                    <Col sm={4} className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part2}>BackEnd</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    다음페이지
                                </div>
                            </div>
                            <div className={styles.general}>
                                <img src={process.env.PUBLIC_URL + "./static/images/icons/html-icon.png"}></img>
                                <img src={process.env.PUBLIC_URL + "./static/images/icons/css-icon.png"}></img>
                                <img src={process.env.PUBLIC_URL + "./static/images/icons/js-icon.png"}></img>
                                <img src={process.env.PUBLIC_URL + "./static/images/icons/react-icon.png"}></img>
                                <img src={process.env.PUBLIC_URL + "./static/images/icons/vue-icon.png"}></img>

                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part3}>Version Control Tool</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    다음페이지
                                </div>
                            </div>
                            <div className={styles.general}>소개</div>
                        </div>
                    </Col>

                    <Col sm={4} className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part4}>Communication</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    다음페이지
                                </div>
                            </div>
                            <div className={styles.general}>소개</div>
                        </div>
                    </Col>

                    <Col sm={4} className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part4}>Communication</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    다음페이지
                                </div>
                            </div>
                            <div className={styles.general}>소개</div>
                        </div>
                    </Col>
                </Row>
            </div>
  
        </div>
    )
}

export default TechStack
