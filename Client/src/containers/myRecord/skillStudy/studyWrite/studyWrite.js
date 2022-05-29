import {
    Row,
    Col,
    Form,
    Dropdown,
    DropdownButton,
    Button,
} from 'react-bootstrap'
import Header from '../../../../components/common/Header/header'
import styles from './studyWrite.module.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function StudyWrite() {
    const [inputTitle, setInputTitle] = useState('')
    const [inputContent, setInputContent] = useState('')

    const titleHandler = (event) => {
        setInputTitle(event.target.value)
    }
    const contentHandler = (event) => {
        setInputContent(event.target.value)
    }

    const onClickHandler = (event) => {
        axios
            .post('http://127.0.0.1:8000/review/', {
                title: inputTitle,
                content: inputContent,
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div>
            <Header></Header>
            <Row className={styles.title}>
                {/* -------------title-------------- */}
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="제목을 작성하세요"
                        onChange={titleHandler}
                    />
                </Col>
                {/* -------------Category-------------- */}

                <Col sm>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="카테고리를 선택하세요"
                    >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            {/* -------------Subtitle-------------- */}

            <Row className={styles.subTitle}>
                <Form.Label></Form.Label>
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="한줄 설명을 작성하세요"
                    />
                </Col>
            </Row>
            {/* -------------Content-------------- */}

            <Row className={styles.content}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Text area</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        onChange={contentHandler}
                    />
                </Form.Group>
                <Button
                    variant="outline-primary"
                    onClick={onClickHandler}
                    as={Link}
                    to="/myRecord"
                >
                    등록
                </Button>
            </Row>
        </div>
    )
}

export default StudyWrite
