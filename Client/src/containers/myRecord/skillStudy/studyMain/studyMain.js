import { Card, Button, Form, FormControl } from 'react-bootstrap'
import styles from './studyMain.module.css'
import StudyWrite from '../studyWrite/studyWrite'
import StudyDetail from '../studyDetail/studyDetail'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

function SKillStudyMain() {
    let navigate = useNavigate(); 

    const [text, setText] = useState([])

    const eventHandler = (event) => {
        axios
            .get('http://127.0.0.1:8000/review/')
            .then((response) => {
                setText([...response.data])
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const mounted = useRef(false)
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
            eventHandler()
        } else {
            console.log('랜더링 될때마다 실행')
            console.log(text)

        }
    }, [text])


    return (
        <div className={styles.contentLayout}>
            {text.map((e) => (
                <Card style={{ marginBottom: '20px' }}>
                    <Card.Header as="h5">{e.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            서버와의 데이터렌더링 GET, POST에 대하여 알아보자.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="studyDetail/">
                            Go Detail
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Button
                className={styles.button}
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
                />
                <Button variant="outline-dark">Search</Button>
            </Form>
        </div>
    )
}

export default SKillStudyMain
