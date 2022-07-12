import styles from './techStack.module.css'
import { Row, Col } from 'react-bootstrap'
function TechStack() {
    return (
        <div className={styles.techBg}>
            <div className={styles.tech}>
                <Row className={styles.row}>
                    <Col sm={4} className={styles.col}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part1}>FrontEnd</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    <div className={styles.explain}>
                                        <li>내가 알고 있는 지식</li>
                                        <li>promise</li>
                                        <li>promise</li>
                                        <li>promise</li>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.general}>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/html-icon.png"
                                ></img>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/css-icon.png"
                                ></img>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/js-icon.png"
                                ></img>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/react-icon.png"
                                ></img>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/vue-icon.png"
                                ></img>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/typescript-icon.png"
                                ></img>
                                <img
                                    className={styles.icon}
                                    src="/assets/images/icons/redux-icon.png"
                                ></img>
                            </div>
                        </div>
                    </Col>

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
                            <div className={styles.general}>소개</div>
                        </div>
                    </Col>
                </Row>
                <Row
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                    }}
                >
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
                </Row>
            </div>
  
        </div>
    )
}

export default TechStack
