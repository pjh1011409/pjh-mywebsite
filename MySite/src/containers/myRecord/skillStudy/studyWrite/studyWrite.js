import {Row, Col, Form} from 'react-bootstrap';
import Header from '../../../../components/common/Header/header'


function StudyWrite() {
  return (
    <div>
      <Header></Header>
      <Row>
        <Form.Label column lg={2}>
          Normal Text
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>
      </Row>
    </div>
  );
}

export default StudyWrite