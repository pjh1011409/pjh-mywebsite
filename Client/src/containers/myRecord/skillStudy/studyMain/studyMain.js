import { Card, Button, Form, FormControl } from 'react-bootstrap'
import styles from './studyMain.module.css'
import StudyWrite from '../studyWrite/studyWrite'
import StudyDetail from '../studyDetail/studyDetail'
import { Route, Routes, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../../../../modules/reducer/getReducer'
import { useSelector, useDispatch } from 'react-redux'

function SKillStudyMain() {
    let navigate = useNavigate();
    const { data, loading, error } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    return (
        <div className={styles.contentLayout}>
            {data.map((e) => (
                <Card style={{ marginBottom: '20px' }} key={e.id}>
                    <Card.Header as="h5">{e.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            서버와의 데이터렌더링 GET, POST에 대하여 알아보자.
                        </Card.Text>

                        <Button
                            variant="primary"
                            onClick={() => {
                                navigate(`/studyDetail/${e.id}`)
                            }}
                        >
                            Go Detail
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Button
                className={styles.goDetail}
                variant="outline-primary"
                as={Link}
                to="/studyWrite"
            >
                글 작성
            </Button>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ width: '200px' }}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search)
                    }}
                />
                <Button
                    variant="outline-dark"
                    onClick={() => {
                        setSearchBtn(search)
                    }}
                >
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SKillStudyMain
