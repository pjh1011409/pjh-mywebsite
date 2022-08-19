// ----------------react & hooks-------------------------------------
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// ----------------style & css---------------------------------------
import styles from './studyMain.module.css'
import { Card, Form, FormControl, Spinner,Tab, Row, Col, Nav } from 'react-bootstrap'

// ----------------components & data---------------------------------
import { LoginRecordHeader, Footer,Pagination } from 'components/common'
import { Category } from 'components/StudyMainPage'
import Loading from 'pages/Shimmer'
// ----------------reducer---------------------------------
import { getPosts } from 'modules/reducer'

function StudyMain() {
    //----------------------------------------------- search: 검색내용저장 state, filterData: 카테고리 state--------------------------------
    let [search, setSearch] = useState('')
    let [filterData, setFilterData] = useState(null)
    //----------------------------------------------- 게시글에 따른 페이지네이션 처리---------------------------------------------------------
    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)
    const offset = (page - 1) * limit
    //----------------------------------------------- 페이지 라우팅 기능---------------------------------------------------------
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //----------------------------------------------- 게시글 데이터 get---------------------------------------------------------
    const { data, loading, error } = useSelector((state) => state.posts.posts)

 //-----------------------------------------------   카테고리에 따른 게시글 데이터 filtering ------------------------------------------------------------------

 // dataList 안에 get해온 전체 data 저장
 const getData = () => {
    const dataList = data
    return dataList
}


// getData의 return값(=data)들 중 카테고리가 일치하는 것 filtering 하는 function
const filteringData = (data) => {
    let filtering = getData().filter((type) => type.category === data)
    return filtering
}
// 버튼 클릭시의 값에 따라 보여질 데이터에 대한 삼항조건연산자
// all이면 전체데이터 보이게, 그렇지않으면 카테고리 값에 따른 filteringData 실행
const handleCategory = (e) => {
    let categoryData = e.target.value
    categoryData !== 'all'
        ? setFilterData(filteringData(categoryData))
        : setFilterData(getData())
}


    useEffect(() => {
        dispatch(getPosts())
        setFilterData(getData());
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
        <div className={styles.fullLayout}>
       
        <LoginRecordHeader></LoginRecordHeader>

        <div className={styles.studyMainBg}>
           

<Tab.Container id="left-tabs-example">
                        <Row>
                            <Col sm={3} style={{ backgroundColor: '' }}>
                                <Nav variant="" className="flex-column">
                                    <Category handleCategory={handleCategory}></Category>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                            <div className={styles.contentLayout}>
                {filterData && filterData
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
                            val.subTitle
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
                            <Card.Header as="h5" className={styles.cardHead}>
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
                                        src={`http://127.0.0.1:8000${e.image}`}
                                        alt="사진없음"
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
                            }}
                        />
                    </Form>
                </div>
            </div>
                            </Col>
                        </Row>
                    </Tab.Container>
           
        </div>
        <Footer></Footer>

        </div>
    )
}

export default StudyMain
