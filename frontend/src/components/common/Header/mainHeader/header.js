import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import styles from './header.module.css';

function Header({ handleIndexClick }) {
  const [menu, setMenu] = useState(['AboutMe', 'TechStack', 'Projects', 'Q&A', 'Studying']);
  const [menuToggle, setMenuToggle] = useState(false);
  // 메뉴리스트를 클릭할 시 토글이 false가 되어 자동적으로 메뉴박스닫힘 기능 구현
  const onClickNav = i => {
    handleIndexClick(i);
    setMenuToggle(false);
  };

  const menuToggleHandler = () => {
    if (menuToggle) setMenuToggle(false);
    else setMenuToggle(true);
  };
  return (
    <div>
      <nav className={styles.navBar}>
        <img
          alt="개발자(이미지없음)"
          src={`${process.env.PUBLIC_URL}./static/images/profile/developer.png`}
          className={styles.navImg}
        />

        <div as={Link} to="/" className={styles.navTitle}>
          PJH &#39;s WebSite
        </div>

        {/* 토글을 클릭하게되면 x가 뜨게되고, 그렇지 않으면 버거모양유지 */}
        <div
          role="presentation"
          className={!menuToggle ? `${styles.burgerMenu}` : `${styles.xMenu}`}
          onClick={menuToggleHandler}
        >
          {/* burger에서 x로 변형되는 div */}
          <div className={styles.burgerLine1} />
          <div className={styles.burgerLine2} />
          <div className={styles.burgerLine3} />
        </div>
        {/* 토글을 클릭에 따른 메뉴박스 유무 */}
        <div
          className={[`${styles.menuBox}`, !menuToggle ? `${styles.menuBoxHidden}` : `${styles.menuBoxVisible}`].join(
            ' ',
          )}
        >
          {/* 메뉴박스안에 존재하는 메뉴 리스트 */}
          <div className={styles.menuList}>
            {menu.map((menuData, i) => {
              return (
                <div
                  role="presentation"
                  key={menuData}
                  className={styles.menuItem}
                  onClick={() => {
                    onClickNav(i);
                  }}
                >
                  {menuData}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
