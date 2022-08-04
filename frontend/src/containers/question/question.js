import { Button, Collapse } from 'react-bootstrap'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import QuestionData from './questionData'
import styles from './question.module.css'
const Question = () => {
    const [questionData, setQuestionData] = [QuestionData]
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const openEvent = (i) => {
        console.log(i)
        let newArr = Array(questionData.length).fill(false)
        console.log(newArr)
        newArr[i] = true
        console.log(newArr)
        setShow(newArr)
        setOpen(newArr)
    }
    const closeEvent = (i) => {
        console.log(i)
        let newArr = Array(questionData.length).fill(false)
        console.log(newArr)
        newArr[i] = false
        console.log(newArr)
        setShow(newArr)
        setOpen(newArr)
    }
    return (
        <div
           className={styles.questionBg}
        >
            <div
               className={styles.questionInner}
            >
                {questionData.map((data, i) => {
                    return (
                        <div key={data.id}>
                            <div
                               className={styles.questionMargin}
                            >
                                <h3
                                    className={styles.question}
                                   
                                >
                                    <img
                                src={process.env.PUBLIC_URL + "./static/images/question.png"}
                                    className={styles.questionImg}
></img>

                                    {QuestionData[i].question}
                                </h3>
                            </div>
                            <div style={{ clear: 'both' }}>
                                <div
                                   className={styles.iconMargin}
                                >
                                    <div
                                        className={styles.iconLocation}
                                    >
                                        <div
                                           className={styles.iconWidth}
                                        >
                                            {show[i] ? (
                                                <FontAwesomeIcon
                                                    onClick={() =>
                                                        closeEvent(i)
                                                    }
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open[i]}
                                                    icon={faCaretUp}
                                                    size="3x"
                                                    className={styles.icon}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    onClick={() => openEvent(i)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open[i]}
                                                    icon={faCaretDown}
                                                    size="3x"
                                                    className={styles.icon}
s
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                       className={styles.moreInfoBg}
                                    >
                                        <Collapse
                                            in={open[i]}
                                           className={styles.moreInfo}
                                        >
                                            <div id="example-collapse-text">
                                                {QuestionData[i].answer}
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Question
