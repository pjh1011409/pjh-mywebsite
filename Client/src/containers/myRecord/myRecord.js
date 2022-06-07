import Header from '../../components/common/Header/header'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import styles from './myRecord.module.css'

import SKillStudyMain from './skillStudy/studyMain/studyMain'
import ToDoMain from './toDoList/toDoMain'
import CounterContainer from './interview/counterContainer'
function MyRecord() {
    return (
        <div>
            <Header></Header>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={{ marginTop: '50px' }}>
                    <RecordMenu></RecordMenu>
                    <RecordContent></RecordContent>
                </Row>
            </Tab.Container>
        </div>
    )
}

function RecordMenu() {
    return (
        <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="first" className={styles.tab}>
                        Skills Study
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second" className={styles.tab}>
                        Interview
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" className={styles.tab}>
                        CT
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fourth" className={styles.tab}>
                        Coding Test
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fifth" className={styles.tab}>
                        ToDo List
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    )
}

function RecordContent() {

    return (
        <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <SKillStudyMain></SKillStudyMain>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <CounterContainer></CounterContainer>
                </Tab.Pane>
                <Tab.Pane eventKey="third">sdsd</Tab.Pane>
                <Tab.Pane eventKey="fourth">sdsd</Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <ToDoMain></ToDoMain>
                </Tab.Pane>
            </Tab.Content>
        </Col>
    )
}

export default MyRecord
