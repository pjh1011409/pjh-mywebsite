// ----------------react & hooks-------------------------------------
import { useState } from 'react'
// ----------------style & css---------------------------------------
import styles from './techStack.module.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// ----------------components & data---------------------------------
import { StackData,HardSkill, SoftSkill } from 'data/techStackData'


function TechStack() {
    const [stackData, setStackData] = useState(StackData)
    const [hardSkill, setHardSkill] = useState(HardSkill)
    const [softSkill, setSoftSkill] = useState(SoftSkill)

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
                                    <div className={styles.cardSkill}>Hard Skill</div>
                                    {hardSkill[i].map((img) => {
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
                                         <div className={styles.cardSkill}>Soft Skill</div>
                                    {softSkill[i].map((img) => {
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