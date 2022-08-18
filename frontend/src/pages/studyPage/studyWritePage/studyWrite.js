// ----------------react & hooks-------------------------------------
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, batch } from 'react-redux'
// ----------------style & css---------------------------------------
import styles from './studyWrite.module.css'
import { Row, Col, Form } from 'react-bootstrap'
// ----------------components & data---------------------------------
import { Footer, TextEditor } from 'components/common'
// ----------------reducer-------------------------------------------
import { createPost } from 'modules/reducer'

function StudyWrite() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef([])
    // ------------------------------- 입력칸에 커서 ------------------------------
    useEffect(() => {
        inputRef.current[0].focus()
    }, [])

    // ------------------------------- 입력하지 않은 input으로 이동 + focus------------------------------
    const handleIndexClick = (index) => {
        inputRef.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
        setTimeout(() => {
            inputRef.current[index].focus()
        }, 100)
    }

    // ------------------------------- 카테고리,제목,부제목,본문 state & 입력핸들러 ------------------------------
    // useState가 객체를 상태 관리 -> 반복적인 useState 해결
    const [inputs, setInputs] = useState({
        category: '',
        title: '',
        subTitle: '',
    })
    // body와 setBody를 textEditor.js에 props로 전달하기 위해 일반적인 useState 사용
    const [body, setBody] = useState('')
    // 쉽게 사용할 수 있도록 비구조화 할당을 통해 추출
    const { category, title, subTitle } = inputs
    const onChange = (e) => {
        const { value, name } = e.target // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs,
            [name]: value, // name 키를 가진 값을 value 로 설정 (이때 [name]은 계산된 속성명 구문 사용)
        })
    }
    // ------------------------------- 이미지 state & 이미지핸들러 ------------------------------
    const [Image, setImage] = useState('')
    const [ImageFile, setImageFile] = useState('')

    const imageHandler = (e) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        setImage(e.target.files[0])
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageFile(reader.result)
                resolve()
            }
        })
    }
    // ------------------------------- 게시글 업로드------------------------------
    const createData = () => {
        if (title === '') {
            alert('제목을 작성해주세요')
            handleIndexClick(0)
            return
        } else if (category === '') {
            alert('카테고리를 작성해주세요')
            handleIndexClick(1)
            return
        } else if (subTitle === '') {
            alert('부제목을 작성해주세요')
            handleIndexClick(2)
            return
        } else if (body === '') {
            alert('본문을 작성해주세요')
            handleIndexClick(3)
            return
        }
        const inputData = new FormData()
        inputData.append('category', category)
        inputData.append('title', title)
        inputData.append('subTitle', subTitle)
        inputData.append('body', body)
        inputData.append('image', Image)
        // inputData를 distpatch를 통해서 전송
        dispatch(createPost(inputData))
        // 함수 실행 시 myRecord로 이동
        navigate('/studyMain')

        // 새로운 데이터에 대한 랜더링이 필요하므로 새로고침 실행
        window.location.reload()
    }

    // ------------------------------- 뒤로 가기 ------------------------------

    const goBack = () => {
        navigate('/studyMain')
    }

    return (
        <div>
            <div className={styles.writeBg}>
                <div className={styles.writeText}>
                    <Row className={styles.title}>
                        {/* -------------title-------------- */}
                        <Col sm={8} className={styles.form}>
                            Title
                            <Form.Control
                                ref={(el) => (inputRef.current[0] = el)}
                                name="title"
                                type="text"
                                placeholder="제목을 작성하세요"
                                onChange={onChange}
                                className={styles.formTitle}
                                maxLength="20"
                            />
                        </Col>
                        {/* -------------Category-------------- */}

                        <Col sm={4} className={styles.categoryLayout}>
                            Category
                            <select
                                ref={(el) => (inputRef.current[1] = el)}
                                name="category"
                                placeholder="카테고리를 작성하세요(10자 이내)"
                                onChange={onChange}
                                className={styles.selectCategory}
                                required
                            >
                                <option>선택</option>

                                <option>Skill Study</option>
                                <option>Interview & CS</option>
                                <option>Coding Test</option>
                                <option>Project Log</option>
                            </select>
                        </Col>
                    </Row>
                    {/* -------------Subtitle-------------- */}

                    <Row className={styles.subTitle}>
                        <Form.Label></Form.Label>
                        <Col sm className={styles.form}>
                            Sub Title
                            <Form.Control
                                ref={(el) => (inputRef.current[2] = el)}
                                name="subTitle"
                                onChange={onChange}
                                type="text"
                                placeholder="한줄 설명을 작성하세요"
                                className={styles.formBorder}
                                maxLength="30"
                            />
                        </Col>
                    </Row>
                    {/* -------------Content-------------- */}

                    <Row className={styles.content}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Text area</Form.Label>

                            <Row>
                                <Col sm className={styles.form}>
                                    <div className={styles.formBorder}>
                                        <TextEditor
                                            Content={body}
                                            setContent={setBody}
                                            imageHandler={imageHandler}
                                        ></TextEditor>
                                    </div>
                                </Col>
                            </Row>
                            <h4 className={styles.imageTitle}>Thumbnail</h4>

                            <div className={styles.imageBg}>
                                <div className={styles.imageLocation}>
                                    {Image && (
                                        <img
                                            src={ImageFile}
                                            style={{ width: '100%' }}
                                        ></img>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    onChange={imageHandler}
                                    name="chooesFile"
                                ></input>
                            </div>
                        </Form.Group>
                    </Row>
                    <div className={styles.buttonBg}>
                        <button
                            className={styles.button}
                            type="submit"
                            onClick={createData}
                        >
                            Post
                        </button>
                        <button className={styles.button} onClick={goBack}>
                            Cancel
                        </button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default StudyWrite
