import { Tab, Row, Col, Nav } from 'react-bootstrap'
import styles from './myRecord.module.css'
import LoginRecordHeader from '../../components/common/Header/loginRecordHeader/loginRecordHeader'
import Footer from '../../components/common/Footer/footer'
import SKillStudyMain from './skillStudy/studyMain/studyMain'
import { useNavigate } from 'react-router-dom'
function MyRecord() {
    let navigate = useNavigate()

    return (
        <div className={styles.myRecordBg}>
            <LoginRecordHeader></LoginRecordHeader>
        <div className={styles.myRecordMain}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <RecordMenu></RecordMenu>
                    <RecordContent></RecordContent>
                </Row>
            </Tab.Container>
        </div>
        <Footer></Footer>
        </div>

    )
}

function RecordMenu() {
    return (
        <Col sm={3} style={{ backgroundColor: '' }}>
            <Nav variant="" className='flex-column'>
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
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third">sdsd</Tab.Pane>
                <Tab.Pane eventKey="fourth">sdsd</Tab.Pane>
                <Tab.Pane eventKey="fifth"></Tab.Pane>
            </Tab.Content>
        </Col>
    )
}

export default MyRecord
