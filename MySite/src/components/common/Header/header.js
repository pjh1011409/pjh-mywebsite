import {Navbar,Nav,Container,Form,FormControl,Button,} from "react-bootstrap";
import { Link } from "react-router-dom";
import style from './header.module.css'


function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>ParkJeongHo's WebSite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/techStack"  style={{ margin: "0 auto" }}>Tech Stack</Nav.Link>
              <Nav.Link as={Link} to="/projects"  style={{ margin: "0 auto" }}>Projects</Nav.Link>
              <Nav.Link as={Link} to="/myStory"  style={{ margin: "0 auto" }}>My Story</Nav.Link>
              <Nav.Link as={Link} to="/study"  style={{ margin: "0 auto" }}>Study</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
