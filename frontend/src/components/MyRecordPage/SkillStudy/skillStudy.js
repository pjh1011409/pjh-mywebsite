// ----------------react & hooks-------------------------------------
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch , batch } from 'react-redux'
// ----------------style & css---------------------------------------
import styles from './skillStudy.module.css'
import { Card, Form, FormControl, Spinner } from 'react-bootstrap'
// ----------------components & data---------------------------------
import {Pagination} from '../../common'
// ----------------reducer---------------------------------
import { getPosts } from 'modules/reducer'

function SKillStudy() {
    let [search, setSearch] = useState('')
    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)
    const offset = (page - 1) * limit

    let navigate = useNavigate()
    const tag = useSelector((state) => state.addTag);
    const { data, loading, error } = useSelector((state) => state.posts.posts);
    
    const dispatch = useDispatch()

    useEffect(() => {
        batch(()=>{
            dispatch(getPosts())   
            dispatch({type:'ADD_TAG', payload:data})   
    
        })
       
    }, [dispatch])

    if (loading)
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    if (error) return <div>에러 발생!</div>
    if (!data) return null

  
    // let tagList = [];
    // for(let i=0; i< data.length; i++){
    //     tagList.push(data[i].category);
    // }
    // const newArr = tagList.filter((e,i,a)=> a.indexOf(e)=== i) 

    return (
        <div style={{ backgroundColor: '' }}>
            {/* <div className={styles.tagLayout}>
                {
                      newArr.map((tag,i)=>{
                        return(
                            <button key={i}>
                                #{tag}
                            </button>
                       )})
                }
               
            </div> */}
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
                        
                            <Card key={e.title} className={styles.card}>
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

export default SKillStudy
