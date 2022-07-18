import { Card, Button, Form, FormControl } from 'react-bootstrap'
import styles from './studyMain.module.css'
import StudyWrite from '../studyWrite/studyWrite'
import StudyDetail from '../studyDetail/studyDetail'
import { Route, Routes, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect} from 'react'
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
        <div style={{backgroundColor:''}}>

        
        <div className={styles.contentLayout}>
            <div className={styles.tag}>
                <button>#React</button>
                <button>#JS</button>
                <button>#Coding Test</button>
                <button>#Django</button>

            </div>
            {data.map((e) => (
                <Card style={{ marginBottom: '20px'}} key={e.id}>
                    <Card.Header as="h5" className={styles.cardHead}>{e.category}</Card.Header>
                    <Card.Body className={styles.cardBody}>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            {e.sub_title}
                        </Card.Text>

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
            ))}
            <div className={styles.utility}> 
            <button
                onClick={()=>{navigate('/studyWrite')}}
            >
                글 작성
            </button>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ width: '200px',marginTop:'20px' }}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search)
                    }}
                />
                <button
                    onClick={() => {
                        setSearchBtn(search)
                    }}
                >
                    Search
                </button>
            </Form></div>
           
        </div>
        </div>
    )
}

export default SKillStudyMain
