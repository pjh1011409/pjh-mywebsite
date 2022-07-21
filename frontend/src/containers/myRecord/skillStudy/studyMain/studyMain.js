import { Card, Button, Form, FormControl, Spinner } from 'react-bootstrap'
import styles from './studyMain.module.css'
import StudyWrite from '../studyWrite/studyWrite'
import StudyDetail from '../studyDetail/studyDetail'
import { Route, Routes, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../../../../modules/reducer/getReducer'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from './pagination'

function SKillStudyMain() {
    let [search, setSearch] = useState('')
    let [tagBtn, setTagBtn] = useState('')

    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)
    const offset = (page - 1) * limit

    let navigate = useNavigate()
    const { data, loading, error } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (loading)
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    return (
        <div style={{ backgroundColor: '' }}>
            <div className={styles.contentLayout}>
                <div className={styles.tag}>
                    <button
                        onClick={() => {
                            setTagBtn('')
                        }}
                    >
                        #전체
                    </button>

                    {data.map((e, i) => {
                        return (
                            <button
                                onClick={() => {
                                    setTagBtn(e.category)
                                    console.log(tagBtn)
                                }}
                            >
                                #{e.category}
                            </button>
                        )
                    })}
                </div>
                {data
                    // eslint-disable-next-line array-callback-return
                    .filter((val) => {
                        if (search === '') {
                            return val
                        } else if (
                            val.title
                                .replace(/ /g, '')
                                .toLowerCase()
                                .includes(
                                    search.toLowerCase().replace(/ /g, '')
                                )
                        ) {
                            return val
                        } else if (
                            val.sub_title
                                .replace(/ /g, '')
                                .toLowerCase()
                                .includes(
                                    search.toLowerCase().replace(/ /g, '')
                                )
                        ) {
                            return val
                        } else if (
                            val.category
                                .replace(/ /g, '')
                                .toLowerCase()
                                .includes(
                                    search.toLowerCase().replace(/ /g, '')
                                )
                        ) {
                            return val
                        }
                    })
                    .slice(offset, offset + limit)
                    .map((e, i) => (
                        <>
                            <Card style={{ marginBottom: '20px' }} key={e.id}>
                                <Card.Header
                                    as="h5"
                                    className={styles.cardHead}
                                >
                                    {e.category}
                                </Card.Header>
                                <Card.Body className={styles.cardBody}>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Text>{e.sub_title}</Card.Text>
                                    <button
                                        className={styles.goDetail}
                                        onClick={() => {
                                            navigate(`/studyDetail/${e.id}`)
                                        }}
                                    >
                                        Go Detail
                                    </button>
                                </Card.Body>
                            </Card>
                        </>
                    ))}
                <Pagination
                    total={data.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />

                <div className={styles.utility}>
                    <button
                        onClick={() => {
                            navigate('/studyWrite')
                        }}
                    >
                        Write
                    </button>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ width: '200px', marginTop: '20px' }}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                console.log(search)
                            }}
                        />
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SKillStudyMain
