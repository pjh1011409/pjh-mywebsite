import styles from './techStack.module.css'
import { Row, Col } from 'react-bootstrap'
function TechStack() {
    return (
        <div style={{ backgroundColor: 'lightskyblue', height: '100%' }}>
            <div
                className={styles.tech}
                style={{ width: '100%', margin: '0 auto' }}
            >
                <Row
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                        paddingTop: '70px',
                    }}
                >
                    <Col sm={4} style={{ minWidth: '550px' }}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part}>FrontEnd</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    <div className={styles.explain}>
                                      <li>promise</li>
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
                            </div>
                        </div>
                    </Col>

                    <Col sm={4} style={{ minWidth: '550px' }}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part}>BackEnd</div>
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
                    <Col sm={4} style={{ minWidth: '550px' }}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part}>FrontEnd</div>
                                </div>
                                <div className={styles.moreInfo}>
                                    다음페이지
                                </div>
                            </div>
                            <div className={styles.general}>소개</div>
                        </div>
                    </Col>

                    <Col sm={4} style={{ minWidth: '550px' }}>
                        <div className={styles.card}>
                            <div className={styles.additional}>
                                <div className={styles.userCard}>
                                    <div className={styles.part}>FrontEnd</div>
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
            {/* <Row>
    <Col sm style={{minWidth:'400px',border:'1px solid'}}>
      <h1>FrontEnd</h1>
   
    </Col>
    <Col sm style={{minWidth:'400px',border:'1px solid'}}>
    <h1>BackEnd</h1>

    <img className={styles.icon} src="/assets/images/icons/react-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/vue-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/django-icon.png"></img>
    </Col>
    <Col sm style={{minWidth:'400px',border:'1px solid'}}>
    <img className={styles.icon} src="/assets/images/icons/mysql-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/github-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/java-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/typescript-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/python-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/node-icon.png"></img>
    </Col>
  </Row> */}
        </div>
    )
}

export default TechStack
