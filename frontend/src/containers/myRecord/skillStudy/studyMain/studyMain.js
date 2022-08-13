import { Card, Form, FormControl, Spinner } from 'react-bootstrap'
import styles from './studyMain.module.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../../../../modules/reducer/getReducer'
import { useSelector, useDispatch , batch } from 'react-redux'
import Pagination from './pagination'

function SKillStudyMain() {
    let [search, setSearch] = useState('')
    let [tagBtn, setTagBtn] = useState([1,2])
    let [tag, setTag] = useState('')

    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)
    const offset = (page - 1) * limit

    let navigate = useNavigate()
    const { data, loading, error } = useSelector((state) => state.posts.posts);
    const {state}= useSelector((state) => state.addTag);

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
            {/* <div className={styles.tagLayout}>
                {data.map(data=>{
                    return(
                        
                        <button >{data.cat}</button>
                    )
                })}
            </div> */}
            {state}
            <div className={styles.contentLayout}>
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
                        
                            <Card key={e.id} className={styles.card}>
                                <Card.Header
                                    as="h5"
                                    className={styles.cardHead}
                                >
                                    {e.category}
                                </Card.Header>
                                <Card.Body className={styles.cardBody}>
                                    <div className={styles.cardText}>
                                        <h5 className={styles.cardTitle}>
                                            {e.title}
                                        </h5>
                                        <h8>{e.subTitle}</h8>
                                        <button
                                            className={styles.goDetail}
                                            onClick={() => {
                                                navigate(`/studyDetail/${e.id}`)
                                            }}
                                        >
                                            Go Detail
                                        </button>
                                    </div>
                                    <div className={styles.postImage}>
                                        <img
                                            src={`http://222.235.9.74:8000${e.image}`}
                                            alt="dd"
                                        ></img>
                                    </div>
                                </Card.Body>
                            </Card>
                        
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
