import Header from '../../../../components/common/Header/header'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost } from '../../../../modules/reducer/getReducer'
import { useSelector, useDispatch } from 'react-redux'

function StudyDetail() {
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
        <div>
            <Header></Header>
            <div style={{ marginTop: '100px' }}>
                <h1> {data.id}</h1>
                <h2> {data.category}</h2>
                <p> {data.content}</p>
            </div>
        </div>
    )
}

export default StudyDetail
