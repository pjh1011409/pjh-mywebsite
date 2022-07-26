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
            <div className={styles.tech}>
                <Row className={styles.row}>
                    {stackData.map((data, i) => {
                        return (
                            <>
                                <Col sm={4} className={styles.col}>
                                    <div className={styles.card}>
                                        <div className={styles.additional}>
                                            <div className={styles.userCard}>
                                                <div className={styles.part2}>
                                                    {data.stackName}
                                                </div>
                                            </div>
                                            <div className={styles.moreInfo}>
                                                {data.stackAbout}
                                            </div>
                                        </div>
                                        <div className={styles.general}>
                                            {images[i].map((img) => {
                                                return (
                                                    <>
                                                        <img src={img}></img>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default TechStack
