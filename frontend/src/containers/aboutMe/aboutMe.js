import styles from './aboutMe.module.css'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import {AboutMeData, AboutMeImage} from './aboutMeData'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
function AboutMe() {
    const [image, setImage] = useState(AboutMeImage)
    const [data, setData] = useState(AboutMeData)
    return (
        <div style={{backgroundColor:'#0078AA'}}>
        <div className={styles.aboutMeBg}>
        <div className={styles.aboutMeHead}>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.aboutMeIcon}></FontAwesomeIcon>
                    ABOUT ME
                </div>
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
                        <h2>{data.name}</h2>
                        <h3>{data.englishName}</h3>
                        <div className={styles.aboutText}>
                            {data.text}
                        </div>
                    </div>
                </Col>

                <div className={styles.aboutFooter}>
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
                </div>
            </Row>
        </div>
        </div>

    )
}

export default AboutMe
