import { Row, Col, Form, FormControl } from 'react-bootstrap'
import styles from './studyUpdate.module.css'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Footer from '../../../../components/common/Footer/footer'
import { uriSave } from '../../../../modules/reducer/urlReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../../../modules/reducer/getReducer'
import {
    updateDataContents,
    updatePost,
} from '../../../../modules/reducer/updateReducer'
import { updateDataId } from '../../../../modules/reducer/updateReducer'
import {
    update,
    getUpdateData,
} from '../../../../modules/reducer/updateReducer'

import TextEditor from '../studyWrite/textEditor'
function StudyUpdate() {
  
    const { id } = useParams()
    const postId = parseInt(id)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // ----------------- 수정 원하는 해당 게시글 가저오기-----------------
    const state = useSelector((state) => state.getUpdateData)

    //  ----------------------해당 게시글 값들을 state값에 저장-----------------------

    const [inputs, setInputs] = useState({
        category: '',
        title: '',
        subTitle: '',
    })
    const [body,setBody] = useState('')

    const [Image, setImage] = useState('')
    const [ImageFile, setImageFile] = useState('')
    const [originDelete, setOriginDelete] = useState(false)

    useEffect(() => {
        setInputs({
            title:state.title,
            subTitle:state.subTitle,
            category:state.category,
        })
        setBody(state.body)
       
    }, [])

    // ------------------------게시글 수정 로직(실시간 글입력)-------------------------
    const {category,title, subTitle,  } = inputs;
    const onChange = useCallback((e) => {
        const { value, name } = e.target // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs,
            [name]: value, // name 키를 가진 값을 value 로 설정 (이때 [name]은 계산된 속성명 구문 사용)
        })
    },[inputs])
   
    const imageHandler = (e) => {
        setOriginDelete(true)
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

    // -------------------------- 수정한 게시글 올리기----------------------
    const updateData = () => {
        const inputData = new FormData()
        inputData.append('category', category)
        inputData.append('title', title)
        inputData.append('subTitle', subTitle)
        inputData.append('body', body)
        inputData.append('image', Image)
        dispatch(updateDataId(id))
        dispatch(updateDataContents(inputData))
        dispatch(update())
        navigate('/myRecord')
        window.location.reload()
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
                        <Col sm className={styles.form}>
                            Titile
                            <FormControl
                                name="title"
                                type="text"
                                value={title || ''}
                                onChange={onChange}
                                className={styles.formBorder}
                            ></FormControl>
                        </Col>
                        {/* -------------Category-------------- */}

                        <Col sm>
                            Category
                            <FormControl
                                name="category"
                                type="text"
                                value={category || ''}
                                onChange={onChange}
                                className={styles.formBorder}
                                
                            ></FormControl>
                        </Col>
                    </Row>
                    {/* -------------Subtitle-------------- */}

                    <Row className={styles.subTitle}>
                        <Form.Label></Form.Label>
                        <Col sm className={styles.form}>
                            Sub Title
                            <FormControl
                                name="subTitle"
                                onChange={onChange}
                                type="text"
                                value={subTitle || ''}
                                className={styles.formBorder}
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
                                            Content={body || ''}
                                            setContent={setBody}
                                        ></TextEditor>
                                    </div>
                                </Col>
                            </Row>
                            <h4 className={styles.imageTitle}>Thumbnail</h4>

                            <div className={styles.imageBg}>
                                <div className={styles.imageLocation}>
                                    {originDelete === false ? (
                                        <img
                                            src={`http://222.235.9.74:8000${state.image}`}
                                            style={{ maxWidth: '200px' }}
                                            alt="이미지 업로드 실패"
                                        ></img>
                                    ) : (
                                        Image && (
                                            <img
                                                src={ImageFile}
                                                style={{ width: '100%' }}
                                            ></img>
                                        )
                                    )}
                                </div>
                                <input
                                    type="file"
                                    onChange={imageHandler}
                                ></input>
                            </div>
                        </Form.Group>
                    </Row>
                    
                    <div className={styles.buttonBg}>
                        <button className={styles.button} onClick={updateData}>
                            Update
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

export default StudyUpdate
