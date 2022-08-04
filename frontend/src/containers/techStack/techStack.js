import styles from './techStack.module.css'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { StackData } from './techStackData'
import { Images } from './techStackData'

function TechStack() {
    const [stackData, setStackData] = useState(StackData)
    const [images, setImages] = useState(Images)

    return (
        <div className={styles.techBg}>
            <Row className={styles.row}>
                {stackData.map((data, i) => {
                    return (
                        
                            <Col sm={5} key={data.id} className={styles.col}>
                                <div className={styles.card}>
                                    <div className={styles.additional}>
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
                                                            process.env
                                                                .PUBLIC_URL +
                                                            `./static/images/icons/${img}`
                                                        }
                                                    ></img>
                                                
                                            )
                                        })}
                                    </div>
                                </div>
                            </Col>
                        
                    )
                })}
            </Row>
        </div>
    )
}

export default TechStack
