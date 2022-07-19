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
            style={{
                height: '1200px',
                backgroundColor: '#d3eded',
            }}
        >
            <div
                style={{
                    width: '90%',
                    margin: '0 auto',
                    padding: '15px 0px 30px 15px',
                    height: 'auto',
                }}
            >
                {questionData.map((a, i) => {
                    return (
                        <>
                            <div
                                style={{
                                    width: '90%',
                                    margin: '0 auto',
                                    marginTop: '150px',
                                }}
                            >
                                <h3
                                    className={styles.underline}
                                    style={{
                                        margin: '10px',
                                        fontWeight: 'bolder',
                                        color: '#2c3964',
                                    }}
                                >
                                    <img
                                        src="/assets/images/question.png"
                                        style={{ width: '45px', marginRight:'20px' }}
                                    ></img>

                                    {QuestionData[i].question}
                                </h3>
                            </div>
                            <div style={{ clear: 'both' }}>
                                <div
                                    style={{
                                        marginTop: '20px',
                                        width: '90%',
                                        margin: '0 auto',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            float: 'left',
                                            height: 'auto',
                                            width: '7%',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '100px',
                                                fontSize: '12px',
                                            }}
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
                                                    style={{
                                                        color: '#34136f',
                                                        float: 'right',
                                                    }}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    onClick={() => openEvent(i)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open[i]}
                                                    icon={faCaretDown}
                                                    size="3x"
                                                    style={{
                                                        color: '#34136f',
                                                        float: 'right',
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            float: 'left',
                                            width: '90%',
                                            height: 'auto',
                                        }}
                                    >
                                        <Collapse
                                            in={open[i]}
                                            style={{
                                                padding: '0 15px 15px 15px',
                                                marginLeft:'10px',
                                                marginBottom: '56px',
                                                backgroundColor: 'white',
                                                borderRadius: '20px',
                                            }}
                                        >
                                            <div id="example-collapse-text">
                                                {QuestionData[i].answer}
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Question
