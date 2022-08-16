// ----------------react & hooks-------------------------------------
import { useNavigate } from 'react-router-dom'
// ----------------style & css---------------------------------------
import styles from './myRecord.module.css'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
// ----------------components & data---------------------------------
import {LoginRecordHeader, Footer} from 'components/common'
import {SkillStudy, Interview, CodingTest, PorjectLog} from 'components/MyRecordPage'

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
                        Skill Study
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second" className={styles.tab}>
                        Interview & CS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" className={styles.tab}>
                        Coding Test
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fourth" className={styles.tab}>
                        Project log
                    </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link eventKey="fifth" className={styles.tab}>
                        ToDo List
                    </Nav.Link>
                </Nav.Item> */}
            </Nav>
        </Col>
    )
}

function RecordContent() {
    return (
        <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <SkillStudy></SkillStudy>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Interview></Interview>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <CodingTest></CodingTest>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <PorjectLog></PorjectLog>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="fifth"></Tab.Pane> */}
            </Tab.Content>
        </Col>
    )
}

export default MyRecord
