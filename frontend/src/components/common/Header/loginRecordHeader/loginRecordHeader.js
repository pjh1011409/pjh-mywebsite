import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import styles from './loginRecordHeader.module.css'

const LoginRecordHeader = () => {
    const [menuToggle, setMenuToggle] = useState(false)


 
    return (
        <div>
            <nav 
                className={styles.navBar}>
                <img
                    src={
                        process.env.PUBLIC_URL +
                        './static/images/profile/developer.png'
                    }
                    className={styles.navImg}
                ></img>
                <div as={Link} to="/" className={styles.navTitle}>
                    PJH's WebSite
                </div>
                {/* 토글을 클릭하게되면 x가 뜨게되고, 그렇지 않으면 버거모양유지 */}
                <div
                    className={
                        !menuToggle ? `${styles.burgerMenu}` : `${styles.xMenu}`
                    }
                    onClick={() =>
                        menuToggle ? setMenuToggle(false) : setMenuToggle(true)
                    }
                >
                    {/* burger에서 x로 변형되는 div */}
                    <div className={styles.burgerLine1}></div>
                    <div className={styles.burgerLine2}></div>
                    <div className={styles.burgerLine3}></div>
                </div>
                {/* 토글을 클릭에 따른 메뉴박스 유무 */}
                <div
                    className={[
                        `${styles.menuBox}`,
                        !menuToggle
                            ? `${styles.menuBoxHidden}`
                            : `${styles.menuBoxVisible}`,
                    ].join(' ')}
                >
                    {/* 메뉴박스안에 존재하는 메뉴 리스트 */}
                    <div className={styles.menuList}>
                        <NavLink className={styles.menuItem} as={Link} to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={styles.menuItem}
                            as={Link}
                            to="/myRecord"
                        >
                            MyRecord
                        </NavLink>
                        <NavLink
                            className={styles.menuItem}
                            as={Link}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default LoginRecordHeader
