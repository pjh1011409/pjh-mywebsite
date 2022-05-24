import {Card, Button} from 'react-bootstrap'
import styles from './studyMain.module.css'
import StudyWrite from '../studyWrite/studyWrite';
import {Link,Route, BrowserRouter} from 'react-router-dom';
function SKillStudyMain() {
  return (
    <div className={styles.contentLayout}>
      <Card>
        <Card.Header as="h5">React</Card.Header>
        <Card.Body>
          <Card.Title>Axios에 대하여</Card.Title>
          <Card.Text>
            서버와의 데이터렌더링 GET, POST에 대하여 알아보자.
          </Card.Text>
          <Button variant="primary">Go Detail</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Django</Card.Header>
        <Card.Body>
          <Card.Title>첫시작</Card.Title>
          <Card.Text>블라블라블라</Card.Text>
          <Button variant="primary">Go Detail</Button>
        </Card.Body>
      </Card>
      <Button variant="outline-primary" as={Link} to="/studyWrite">
        글 작성
      </Button>
    
    </div>
  );
}

export default SKillStudyMain