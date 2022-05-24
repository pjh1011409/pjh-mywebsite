import Header from '../../../../components/common/Header/header'


function StudyDetail() {
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

export default StudyDetail