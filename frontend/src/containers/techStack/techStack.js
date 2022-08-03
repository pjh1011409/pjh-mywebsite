import styles from './techStack.module.css'
import { Row, Col, Collapse } from 'react-bootstrap'
import { useState } from 'react'
import { StackData } from './techStackData'
import { Images } from './techStackData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function TechStack() {
    const [stackData, setStackData] = useState(StackData)
    const [images, setImages] = useState(Images)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const openEvent = (i) => {
        console.log(i)
        let newArr = Array(stackData.length).fill(false)
        console.log(newArr)
        newArr[i] = true
        console.log(newArr)
        setShow(newArr)
        setOpen(newArr)
    }
    const closeEvent = (i) => {
        console.log(i)
        let newArr = Array(stackData.length).fill(false)
        console.log(newArr)
        newArr[i] = false
        console.log(newArr)
        setShow(newArr)
        setOpen(newArr)
    }
    return (
        <div className={styles.techBg}>
                <Row className={styles.row}>
                    {stackData.map((data, i) => {
                        return (
                            <>
                            
                                <Col sm={5} className={styles.col}>
                                    <div className={styles.card}>
                                        <div className={styles.additional}>
                                            <div className={styles.userCard}>
                                                <div className={styles.part}>
                                                    {data.stackName}
                                                </div>
                                            </div>
                                            {/* <div className={styles.moreInfo}>
                                                {data.stackAbout}
                                            </div> */}
                                        </div>
                                        <div className={styles.general}>
                                            {images[i].map((img) => {
                                                return (
                                                    <>
                                                        <img src={ process.env.PUBLIC_URL +`./static/images/icons/${img}`}></img>
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
    )
}

export default TechStack
