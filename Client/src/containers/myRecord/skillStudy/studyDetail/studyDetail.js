import Header from '../../../../components/common/Header/header'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import { data } from 'jquery'

function StudyDetail() {
    const { id } = useParams()
    const [text, setText] = useState([])
    let navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/review/${id}`)
            .then((data) => {
                setText(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    console.log(text)

    const onDelete = () => {
        if (!window.confirm('삭제하시겠습니까?')) return false
        axios
            .delete(`http://127.0.0.1:8000/review/${id}`)
            window.location.reload(true)
            
            .catch((error) => {
                console.log(error)
            })
        alert('게시글이 삭제')
                    navigate('/myRecord');

    }

    return (
        <>
            <Header></Header>

            <div>
                <div style={{ marginTop: '100px' }}></div>
                <h1>{text.title}</h1>
                <h2>{text.category}</h2>
                <p>{text.content}</p>
            </div>
            <button onClick={onDelete}>삭제</button>
        </>
    )
}

export default StudyDetail
