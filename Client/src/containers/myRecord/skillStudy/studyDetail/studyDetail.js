import Header from '../../../../components/common/Header/header'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost } from '../../../../modules/reducer/getReducer'
import { useSelector, useDispatch } from 'react-redux'
import styles from './studyDetail.module.css'
import { Col } from 'react-bootstrap'
import Footer from '../../../../components/common/Footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link  } from 'react-router-dom'
function StudyDetail() {
    let navigate = useNavigate();

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

    return (
            <div className={styles.studyDetailBg}>
                <div className={styles.top}>
                    <div className={styles.titleGroup}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.subTitle}>{data.category}</div>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.content}>{data.content}</div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.button}>
                        <button>Change</button>
                        <button onClick={()=>{confirm("정말로 삭제하시겠습니까?")}}>Delete</button>

                        <button  onClick={() => {
                                navigate(`/myRecord`)
                            }}>
                            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <Footer></Footer>

            </div>
    )
}

export default StudyDetail
