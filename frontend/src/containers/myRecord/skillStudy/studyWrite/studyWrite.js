import { Row, Col, Form } from 'react-bootstrap'
import styles from './studyWrite.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../../../../components/common/Footer/footer'
import { createPost } from '../../../../modules/reducer/createReducer'
import { uriSave } from '../../../../modules/reducer/urlReducer'
import { useDispatch } from 'react-redux'
import CkEditor from './textEditor'

function StudyWrite() {
    const [Title, setTitle] = useState('')
    const [SubTitle, setSubTitle] = useState('')
    const [Content, setContent] = useState('')
    const [Category, setCategory] = useState('')
    const [Image, setImage] = useState('')
    const [ImageFile, setImageFile] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const subTitleHandler = (e) => {
        setSubTitle(e.target.value)
    }
    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }
    const imageHandler = (e) => {
        let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            setImage(e.target.files[0]) 
            return new Promise((resolve) => {
                reader.onload = () =>{
                    setImageFile(reader.result) 
                    resolve();
                }
               
            })
          
       
    }
  

    const createData = () => {
        const inputData = new FormData()
        inputData.append('category', Category)
        inputData.append('title', Title)
        inputData.append('sub_title', SubTitle)
        inputData.append('body', Content)
        inputData.append('image', Image)
        console.log(inputData)
        dispatch(createPost(inputData))
        navigate('/myRecord')
        window.location.reload()
        dispatch(uriSave('/myRecord'))
    }

    const goBack = () => {
        navigate('/myRecord')
    }

    return (
        <div>
            <div className={styles.writeBg}>
                <div className={styles.writeText}>
                    <Row className={styles.title}>
                        {/* -------------title-------------- */}
                        <Col sm style={{ marginBottom: '20px' }}>
                            Title
                            <Form.Control
                                type="text"
                                placeholder="제목을 작성하세요"
                                onChange={titleHandler}
                                style={{ border: '2px solid green', marginTop:'5px' }}
                            />
                        </Col>
                        {/* -------------Category-------------- */}

                        <Col sm>
                            Category
                            <Form.Control
                                type="text"
                                placeholder="카테고리를 작성하세요(10자 이내)"
                                onChange={categoryHandler}
                                style={{ border: '2px solid green' , marginTop:'5px'}}
                                maxLength="10"
                            />
                        </Col>
                    </Row>
                    {/* -------------Subtitle-------------- */}

                    <Row className={styles.subTitle}>
                        <Form.Label></Form.Label>
                        <Col sm style={{ marginBottom: '20px' }}>
                            Sub Title
                            <Form.Control
                                onChange={subTitleHandler}
                                type="text"
                                placeholder="한줄 설명을 작성하세요"
                                style={{ border: '2px solid green',marginTop:'5px' }}
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

                            <Row className={styles.Title}>
                                <Col
                                    sm
                                    style={{
                                        marginBottom: '0px',
                                        height: 'auto',
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '2px solid green',
                                            marginBottom: '30px',
                                        }}
                                    >
                                        <CkEditor
                                            Content={Content}
                                            setContent={setContent}
                                        ></CkEditor>
                                    </div>
                                </Col>
                            </Row>
                            <h4>Thumbnail</h4>

                            <div
                                style={{
                                    border: '2px solid green',
                                    width: '100%',
                                    margin: ' 0 auto',
                                }}
                            >
                                <div
                                    style={{ width: '300px', margin: '0 auto', textAlign:'center' }}
                                >
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
                        <button className={styles.button} onClick={createData}>
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
