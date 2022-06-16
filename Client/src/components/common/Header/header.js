import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as React from 'react'

import styles from './header.module.css'

const Header = (props) => {
    return (
        <div>
            <Navbar
                bg="light"
                expand="lg"
                style={{
                    position: 'fixed',
                    opacity: '0.9',
                    width: '100%',
                    top: '0',
                    left: '0',
                    right: '0',
                    zIndex: '1',
                }}
            >
                <Container>
                    <img
                        src="assets/images/profile/park.png"
                        style={{ width: '50px', marginRight: '30px' }}
                    ></img>

                    <Navbar.Brand onClick={() => props.handleIndexClick(0)} style={{cursor:'pointer'}}>
                        PJH's WebSite
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                style={{
                                    color: 'black',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
                                className={styles.navBtn}
                                onClick={() => props.handleIndexClick(1)}
                            >
                                Tech Stack
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'black',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
                                className={styles.navBtn}
                                onClick={() => props.handleIndexClick(2)}
                            >
                                My Story
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'black',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
                                className={styles.navBtn}
                                onClick={() => props.handleIndexClick(3)}
                            >
                                Projects
                            </Nav.Link>

                            <Nav.Link
                                style={{
                                    color: 'black',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
                                as={Link}
                                to="/study"
                                className={styles.navBtn}
                            >
                                Study
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'black',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
                                as={Link}
                                to="/myRecord"
                                className={styles.navBtn}
                            >
                                MyRecord
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'black',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                }}
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
