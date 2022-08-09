import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as React from 'react'
import { useState } from 'react'
import styles from './loginRecordHeader.module.css'

const LoginRecordHeader = () => {
   
    return (
        <div>
            <Navbar
                bg="light"
                expand="lg"
                variant="light"
                className={styles.navBar}
            >
                <Container>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            './static/images/profile/developer.png'
                        }
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
                                as={Link}
                                to="/"
                            >
                                HOME
                            </Nav.Link>
                            <Nav.Link
                                className={[styles.navLink, styles.navBtn]}
                                as={Link}
                                to="/login"
                            >
                                LOGIN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default LoginRecordHeader
