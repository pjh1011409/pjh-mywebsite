import styles from './aboutMe.module.css'
import { Row, Col } from 'react-bootstrap'
function AboutMe() {
    return (
        <div className={styles.aboutMeBg}>
            <Row
                xs={1}
                md={2}
                style={{
                    width: '85%',
                    margin: ' 0 auto',
                    padding: '100px 0px',
                    height: 'auto',
                }}
            >
                <Col
                    style={{
                        minWidth: '430px',
                        height: '450px',
                    }}
                >
                    <div
                        style={{
                            width: '70%',
                            height: '70%',
                            margin: '0 auto',
                            marginTop: '80px',
                        }}
                    >
                        <img
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '30px 30px',
                            }}
                            src={process.env.PUBLIC_URL + "./static/images/profile/park.png"}
                            ></img>
                    </div>
                </Col>
                <Col
                    style={{
                        minWidth: '430px',
                        height: 'auto',
                    }}
                >
                    <div
                        style={{
                            width: '400px',
                            height: '450px',
                            margin: '0 20px',
                            padding: ' 20px 20px',
                        }}
                    >
                        <div style={{ fontSize: '35px' }}>박정호</div>
                        <div
                            style={{
                                fontSize: '25px',
                                paddingBottom: '10px',
                            }}
                        >
                            Park Jeong Ho
                        </div>
                        <div style={{ fontSize: '18px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Nisl tincidunt eget nullam non.
                            Quis hendrerit dolor magna eget est lorem ipsum
                            dolor sit. Volutpat odio facilisis mauris sit amet
                            massa. Commodo odio aenean sed adipiscing diam donec
                            adipiscing tristique. Mi eget mauris pharetra et.
                        </div>
                    </div>
                </Col>
                <Col
                    style={{
                        height: 'auto',
                        width: '1300px',
                    }}
                >
                    <div
                        style={{
                            width: '86%',
                            margin: '0 auto',
                        }}
                    >
                        <div style={{ fontSize: '18px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Nisl tincidunt eget nullam non.
                            Quis hendrerit dolor magna eget est lorem ipsum
                            dolor sit. Volutpat odio facilisis mauris sit amet
                            massa. Commodo odio aenean sed adipiscing diam donec
                            adipiscing tristique. Mi eget mauris pharetra et.
                            Non tellus orci ac auctor augue.
                        </div>
                    </div>
                </Col>
                <Col
                    style={{
                        height: 'auto',
                        width: '1300px',
                    }}
                >
                    <div
                        style={{
                            width: '20%',
                            margin: '0 auto',
                            padding: '30px 6px',
                            minWidth: '350px',
                        }}
                    >
                        <div className={styles.messsengerDiv}>
                            <img
                                className={styles.messenger}
                                src={process.env.PUBLIC_URL + "./static/images/messenger/notion-icon.png"}
                                ></img>
                            <img
                                className={styles.messenger}
                                src={process.env.PUBLIC_URL + "./static/images/messenger/velog-icon.png"}
                            ></img>
                            <img
                                className={styles.messenger}
                                src={process.env.PUBLIC_URL + "./static/images/messenger/github-icon.png"}
                            ></img>
                            <img
                                className={styles.messenger}
                                src={process.env.PUBLIC_URL + "./static/images/messenger/instagram-icon.png"}
                            ></img>
                            <img
                                className={styles.messenger}
                                src={process.env.PUBLIC_URL + "./static/images/messenger/mail-icon.png"}
                            ></img>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe
