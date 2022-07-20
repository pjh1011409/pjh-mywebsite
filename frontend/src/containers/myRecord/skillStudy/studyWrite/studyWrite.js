import {
    Row,
    Col,
    Form,
    Dropdown,
    DropdownButton,
    Button,
} from 'react-bootstrap'
import Header from '../../../../components/common/Header/header'
import styles from './studyWrite.module.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../../../../components/common/Footer/footer'
import {createPost} from '../../../../modules/reducer/createReducer'
import { uriSave } from '../../../../modules/reducer/urlReducer'
import {useDispatch, useSelector} from 'react-redux'

function StudyWrite() {
    const [Title, setTitle] = useState('')
    const [SubTitle, setSubTitle] = useState('')
    const [Content, setContent] = useState('')
    const [Category, setCategory] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const subTitleHandler = (e) => {
        setSubTitle(e.target.value)
    }
    const contentHandler = (e) => {
        setContent(e.target.value)
    }
    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }
    const createData = () => {
        const _inputData = {
            // id:'',
            category: Category,
            title: Title,
            sub_title: SubTitle,
            body: Content,
        }
        dispatch(createPost(_inputData))
        setTitle('')
        setSubTitle('')
        setContent('')
        setCategory('')
        navigate('/myRecord')
        dispatch(uriSave('/myRecord'))
    }

    const goBack = () =>{
        navigate('/myRecord')
    }
    return (
        <div>
            <div className={styles.writeBg}>
            <div className={styles.writeText}>
            <Row className={styles.title}>
                {/* -------------title-------------- */}
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="제목을 작성하세요"
                        onChange={titleHandler}
                        style={{border:'2px solid green'}}
                    />
                </Col>
                {/* -------------Category-------------- */}

                <Col sm>
                    <select onChange={categoryHandler}  style={{border:'2px solid green'}}
>
                        <option value="공부">필수선택</option>
                        <option value="React">React</option>
                        <option value="javaScript">JavaScript</option>
                    </select>
                </Col>
            </Row>
            {/* -------------Subtitle-------------- */}

            <Row className={styles.subTitle}>
                <Form.Label></Form.Label>
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                    onChange={subTitleHandler}
                        type="text"
                        placeholder="한줄 설명을 작성하세요"
                        style={{border:'2px solid green'}}

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
                            style={{ marginBottom: '20px', height: '400px' }}
                        >
                            <Form.Control
                                as="textarea"
                                rows={6}
                                onChange={contentHandler}
                                style={{border:'2px solid green', height:'300px'}}

                            />
                        </Col>
                    </Row>
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
