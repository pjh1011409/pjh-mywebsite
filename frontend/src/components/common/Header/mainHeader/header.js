import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as React from 'react'
import { useState, useEffect, useMemo, useCallback } from 'react'
import styles from './header.module.css'

const Header = (props) => {
    const [menu, setMenu] = useState([
        'AboutMe',
        'TechStack',
        'Projects',
        'Q&A',
    ])

    const [nav, setNav] = useState(true)
    const [navfilter, setNavFilter] = useState(false)

    const onClickNav = (i) => {
        props.handleIndexClick(i)
    }

    const navChange = () => {
        setNav(true)
    }

    return (
        <div>
            <Navbar
                collapseOnSelect
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
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={navChange}
                    />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        {nav === true ? (
                            <Nav className="me-auto">
                                {/* <Nav className={styles.navMenu}> */}
                                {menu.map((menu, i) => {
                                    return (
                                        <Nav.Link
                                            key={menu}
                                            className={[
                                                styles.navLink,
                                                styles.navBtn,
                                            ]}
                                            onClick={() => {
                                                onClickNav(i)
                                            }}
                                        >
                                            {menu}
                                        </Nav.Link>
                                    )
                                })}
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
                                {/* </Nav> */}
                            </Nav>
                        ) : null}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header