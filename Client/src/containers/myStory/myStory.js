import { Row, Col } from 'react-bootstrap'
import styles from './myStory.module.css'

function MyStory() {
    return (
        <div>
            <Row xs={1} md={2}>
                <Col style={{ border: '1px solid' }} className={styles.row1}>
                    {' '}
                    <img
                        className={styles.image1}
                        src="assets/images/storyImage/임시사진1.jpeg"
                    ></img>
                </Col>
                <Col style={{ border: '1px solid' }} className={styles.row2}>
                    {' '}
                    <h4>Hi! Everyone</h4>
                    <div style={{ minWidth: '400px' }}>
                        자신과 살 대중을 청춘의 찾아다녀도, 아름다우냐? 구하지
                        예수는 커다란 풀이 얼마나 실로 내려온 방황하여도,
                        철환하였는가? 남는 사는가 같지 없는 유소년에게서 따뜻한
                        힘있다. 황금시대의 미인을 아니한 사라지지 황금시대다.
                        같은 현저하게 얼마나 고동을 그들의 이상의 인생을
                        철환하였는가? 이성은 그들을 하는 힘차게 풀이 약동하다.
                        위하여, 눈이 작고 같으며, 유소년에게서 미인을 그들을
                        황금시대다. 보배를 이 것은 황금시대다. 같은 현저하게
                        얼마나 고동을 그들의 이상의 인생을 철환하였는가? 이성은
                        그들을 하는 힘차게 풀이 약동하다. 위하여, 눈이 작고
                        같으며, 유소년에게서 미인을 그들을 황금시대다. 보배를 이
                        것은
                    </div>
                </Col>
                <Col style={{ border: '1px solid'}} className={styles.row3}>
                    {' '}
                    <h3 style={{ marginBottom: '20px' }}>Career</h3>
                    <Col sm>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                    </Col>
                    <Col sm>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                    </Col>
                    <Col sm>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>2020.12.12</p>
                        <p
                            style={{
                                borderBottom: '1px solid',
                                paddingBottom: '10px',
                            }}
                        >
                            학교졸업
                        </p>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default MyStory
