// ----------------react & hooks-------------------------------------
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Parser from 'html-react-parser'
// ----------------style & css---------------------------------------
import styles from './studyDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
// ----------------components & data---------------------------------
import {Footer} from 'components/common'
// ----------------reducer---------------------------------
import { getPost, deletePost } from 'modules/reducer'

function StudyDetail() {
    let navigate = useNavigate()

    const { id } = useParams()
    const postId = parseInt(id)
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null,
    } // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost(postId))
    }, [dispatch, postId])
    if (loading && !data) return <div>로딩중...</div> // 로딩중이고 데이터 없을때만
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    let deleteNote = () => {
        if (window.confirm('삭제하시겠습니까?')) dispatch(deletePost(data.id))
        // dispatch(getPosts)

        alert('삭제되었습니다')
        navigate('/myRecord')
        window.location.reload()
    }

    let goToUpdate = () => {
        dispatch({ type: 'UPDATE_GO', payload: data })

        navigate(`/studyUpdate/${id}`)
    }

    return (
        <div className={styles.studyDetailBg}>
            <div className={styles.top}>
                <div className={styles.titleGroup}>
                    <div className={styles.category}>
                        {' '}
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                './static/images/study/category-icon.png'
                            }
                            className={styles.studyImg}
                        ></img>
                        [ {data.category} ]
                    </div>
                    <div className={styles.title}>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                './static/images/study/title-icon.png'
                            }
                            className={styles.studyImg}
                        ></img>
                        {data.title}
                    </div>
                    <div className={styles.subTitle}>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                './static/images/study/about-icon.png'
                            }
                            className={styles.studyImg}
                        ></img>
                        :   {data.subTitle}
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.content}>{Parser(data.body)}</div>
            </div>
            <div
                style={{
                    width: '80%',
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {/* <img src={`http://localhost:8000${data.image}`} style={{maxWidth:'300px'}} alt='이미지 업로드 실패'></img> */}
            </div>

            <div className={styles.bottom}>
                <div className={styles.button}>
                    <button onClick={goToUpdate}>Edit</button>
                    <button onClick={deleteNote}>Delete</button>

                    <button
                        onClick={() => {
                            navigate(`/myRecord`)
                        }}
                    >
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default StudyDetail
