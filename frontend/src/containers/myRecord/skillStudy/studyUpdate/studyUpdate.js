import { Row, Col, Form, FormControl } from 'react-bootstrap'
import styles from './studyUpdate.module.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Footer from '../../../../components/common/Footer/footer'
import { uriSave } from '../../../../modules/reducer/urlReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../../../modules/reducer/getReducer'
import { updatePost } from '../../../../modules/reducer/updateReducer'
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
    const [Title, setTitle] = useState(data.title)
    const [SubTitle, setSubTitle] = useState(data.sub_title)
    const [Content, setContent] = useState(data.body)
    const [Category, setCategory] = useState(data.category)


    useEffect(() => {
        dispatch(getPost(postId))
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
    const contentHandler = (e) => {
        setContent(e.target.value)
    }
    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }


    
// -------------------------- 수정한 게시글 올리기----------------------
    const updateData = () => {
        
        const _inputData = {
            // id:'',
            category: Category,
            title: Title,
            sub_title: SubTitle,
            body: Content,
        }
        console.log(_inputData, id)
        dispatch(updatePost(id, _inputData))
        setTitle(data.title)
        setSubTitle(data.sub_title)
        setContent(data.body)
        setCategory(data.Category)
        navigate('/myRecord')
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
                            <FormControl
                                type="text"
                                value={Title}
                                onChange={titleHandler}
                                style={{ border: '2px solid green' }}
                                a
                            ></FormControl>
                        </Col>
                        {/* -------------Category-------------- */}

                        <Col sm>
                            <select
                                onChange={categoryHandler}
                                style={{ border: '2px solid green' }}
                            >
                                <option value="공부">{Category}</option>
                                <option value="React">React</option>
                                <option value="javaScript">JavaScript</option>
                            </select>
                        </Col>
                    </Row>
                    {/* -------------Subtitle-------------- */}

                    <Row className={styles.subTitle}>
                        <Form.Label></Form.Label>
                        <Col sm style={{ marginBottom: '20px' }}>
                            <FormControl
                                onChange={subTitleHandler}
                                type="text"
                                value={SubTitle}
                                style={{ border: '2px solid green' }}
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
                                        marginBottom: '20px',
                                        height: '400px',
                                    }}
                                >
                                    <FormControl
                                        as="textarea"
                                        type="text"
                                        value={Content}
                                        onChange={contentHandler}
                                        style={{
                                            border: '2px solid green',
                                            height: '300px',
                                        }}
                                    />
                                </Col>
                            </Row>
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
