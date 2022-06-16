import Header from '../../../../components/common/Header/header'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router'

function StudyDetail() {
    const { id } = useParams()
    const [text, setText] = useState([])
    let detail = text.find((item) => {
        if (item.id == id) return true
    })
    console.log(detail);
    
    const mounted = useRef(false)
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
            onClickHandler()
        } else {
            console.log('랜더링 될때마다 실행')
            console.log(text)
        }
    }, [text])
    const onClickHandler = (event) => {
        axios
            .get(`http://127.0.0.1:8000/review/`)
            .then((response) => {
                setText([...response.data])

                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
   
  

  
    return (
        <>
            <Header></Header>

            <div>
            {detail.id}

            </div>
        </>
    )
}

export default StudyDetail
