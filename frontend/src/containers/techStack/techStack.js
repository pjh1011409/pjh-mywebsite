import styles from './techStack.module.css'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { StackData } from './techStackData'
import { Images } from './techStackData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

function TechStack() {
    const [stackData, setStackData] = useState(StackData)
    const [images, setImages] = useState(Images)

    return (
        <div style={{ backgroundColor: '#5798a1' }}>
            <div className={styles.techBg}>
                <div className={styles.techStackHead}>
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={styles.techStackIcon}
                    ></FontAwesomeIcon>
                    TECHSTACK
                </div>
                <Row className={styles.row}>
                    {stackData.map((data, i) => {
                        return (
                            <div key={data.id} className={styles.col}>
                                <div className={styles.card}>
                                    <Row>
                                    <Col sm={3} className={styles.cardLeft} >
                                        <div className={styles.stackName}>
                                        <div>{data.stackName}</div>
                                       
                                        </div>
                                    </Col>
                                    <Col sm={9} className={styles.cardRight}>
                                    {images[i].map((img) => {
                                            return (
                                                <img
                                                    key={img}
                                                    src={
                                                        process.env.PUBLIC_URL +
                                                        `./static/images/icons/${img}`
                                                    }
                                                ></img>
                                            )
                                        })}
                                    </Col>
                                    </Row>
                                    {/* <div className={styles.additional}>
                                        <div className={styles.userCard}>
                                            <div className={styles.part}>
                                                {data.stackName}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.general}>
                                        {images[i].map((img) => {
                                            return (
                                                <img
                                                    key={img}
                                                    src={
                                                        process.env.PUBLIC_URL +
                                                        `./static/images/icons/${img}`
                                                    }
                                                ></img>
                                            )
                                        })}
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default TechStack
