import styles from './aboutMe.module.css'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import {AboutMeData, AboutMeImage} from './aboutMeData'
function AboutMe() {
    const [image, setImage] = useState(AboutMeImage)
    const [data, setData] = useState(AboutMeData)
    return (
        <div className={styles.aboutMeBg}>
            <Row xs={1} md={2} className={styles.aboutMain}>
                <Col className={styles.aboutPart1}>
                    <div className={styles.aboutImg}>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `./static/images/profile/${data.image}`
                            }
                        ></img>
                    </div>
                </Col>
                <Col className={styles.aboutPart2}>
                    <div className={styles.aboutIntro}>
                        <h1>{data.name}</h1>
                        <h2>{data.englishName}</h2>
                        <div className={styles.aboutText}>
                            {data.text}
                        </div>
                    </div>
                </Col>

                <Col className={styles.aboutFooter}>
                    <div className={styles.aboutSns}>
                        <div className={styles.messsengerDiv}>
                            {image.map(img => {
                                return(
                                    
                                        <img
                                            className={styles.messenger}
                                            key={img}
                                            src={
                                                process.env.PUBLIC_URL +
                                                `./static/images/messenger/${img}`
                                            }
                                        ></img>
                                    
                                )
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe
