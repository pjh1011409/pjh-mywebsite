import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import styles from './header.module.css'

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <img
                        src="assets/images/profile/park.png"
                        style={{ width: '50px', marginRight: '30px' }}
                    ></img>

                    <Navbar.Brand as={Link} to="/">
                        PJH's WebSite
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                as={Link}
                                to="/techStack"
                                style={{ color: 'black' }}
                                className={styles.navBtn}
                            >
                                Tech Stack
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                className={styles.navBtn}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/myStory"
                                className={styles.navBtn}
                            >
                                My Story
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/study"
                                className={styles.navBtn}
                            >
                                Study
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/myRecord"
                                className={styles.navBtn}
                            >
                                MyRecord
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/login"
                                className={styles.navBtn}
                            >
                                Login
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
