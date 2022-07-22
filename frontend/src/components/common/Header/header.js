import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as React from 'react'

import styles from './header.module.css'

const Header = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light" className={styles.navBar}>
                <Container>
                    <img
                        src={process.env.PUBLIC_URL + "./static/images/profile/developer.png"}
                        className={styles.navImg}
                    ></img>

                    <Navbar.Brand
                        as={Link}
                        to="/"
                        style={{ cursor: 'pointer' }}
                    >
                        PJH's WebSite
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.navMenu}>
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                onClick={() => props.handleIndexClick(0)}
                            >
                                AboutMe
                            </Nav.Link>
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                onClick={() => props.handleIndexClick(1)}
                            >
                                Q&A
                            </Nav.Link>
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                onClick={() => props.handleIndexClick(2)}
                            >
                                TechStack
                            </Nav.Link>
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                onClick={() => props.handleIndexClick(3)}
                            >
                                Projects
                            </Nav.Link>

                        
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                as={Link}
                                to="/myRecord"
                            >
                                MyRecord
                            </Nav.Link>
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                as={Link}
                                to="/login"
                            >
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
