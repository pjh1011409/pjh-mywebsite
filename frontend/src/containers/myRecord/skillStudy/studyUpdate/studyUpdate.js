import { Row, Col, Form, FormControl } from 'react-bootstrap'
import styles from './studyUpdate.module.css'
import { useState, useEffect } from 'react'
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
import { update } from '../../../../modules/reducer/updateReducer'

import CkEditor from '../studyWrite/textEditor'
function StudyUpdate() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const postId = parseInt(id)

    // ----------------- 수정 원하는 해당 게시글 가저오기-----------------
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null,
    } // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록

    //  ----------------------해당 게시글 값들을 state값에 저장-----------------------
    const [Title, setTitle] = useState()
    const [SubTitle, setSubTitle] = useState()
    const [Content, setContent] = useState()
    const [Category, setCategory] = useState()
    const [Image, setImage] = useState('')
    const [ImageFile, setImageFile] = useState('')
    const [originDelete, setOriginDelete] = useState(false)

    useEffect(() => {
        dispatch(getPost(postId))
        setTitle(data.title)
        setSubTitle(data.subTitle)
        setContent(data.body)
        setCategory(data.category)
        // setImage(data.image)
        console.log(data)
    }, [dispatch, postId])
    if (loading && !data) return <div>로딩중...</div> // 로딩중이고 데이터 없을때만
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    // ------------------------게시글 수정 로직(실시간 글입력)-------------------------
    const titleHandler = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    const subTitleHandler = (e) => {
        console.log(e.target.value)
        setSubTitle(e.target.value)
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }
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
        inputData.append('category', Category)
        inputData.append('title', Title)
        inputData.append('subTitle', SubTitle)
        inputData.append('body', Content)
        inputData.append('image', Image)
        console.log(inputData, id)
        dispatch(updateDataId(id))
        dispatch(updateDataContents(inputData))
        dispatch(update())
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
                        <Col sm className={styles.form}>
                            Titile
                            <FormControl
                                type="text"
                                value={Title||""}
                                onChange={titleHandler}
                                className={styles.formBorder}
                            ></FormControl>
                        </Col>
                        {/* -------------Category-------------- */}

                        <Col sm>
                            Category
                            <FormControl
                                type="text"
                                value={Category||""}
                                onChange={categoryHandler}
                                className={styles.formBorder}
                                ㅅ
                            ></FormControl>
                        </Col>
                    </Row>
                    {/* -------------Subtitle-------------- */}

                    <Row className={styles.subTitle}>
                        <Form.Label></Form.Label>
                        <Col sm className={styles.form}>
                            Sub Title
                            <FormControl
                                onChange={subTitleHandler}
                                type="text"
                                value={SubTitle||""}
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
                                        <CkEditor
                                            Content={Content||""}
                                            setContent={setContent}
                                        ></CkEditor>
                                    </div>
                                </Col>
                            </Row>

                            <div className={styles.imageBg}>
                                <div className={styles.imageLocation}>
                                    {originDelete === false ? (
                                        <img
                                            src={`http://222.235.9.74:8000${data.image}`}
                                            style={{ maxWidth: '400px' }}
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
