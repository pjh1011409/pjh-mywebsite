import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footerLayout}>
      <div className={styles.footerMark}>
        <div>
          <img
            alt="메일(이미지없음)"
            className={styles.icon}
            src={`${process.env.PUBLIC_URL}/static/images/messenger/mail-icon.png`}
          />
          <a href="https://github.com/pjh1011409">
            <img
              alt="깃헙(이미지없음)"
              className={styles.icon}
              src={`${process.env.PUBLIC_URL}/static/images/icons/github-icon.png`}
            />
          </a>

          <a href="https://www.instagram.com/invites/contact/?i=1sdkt27ej1q0q&utm_content=1ipqsn5">
            <img
              alt="인스타(이미지없음)"
              className={styles.icon}
              src={`${process.env.PUBLIC_URL}/static/images/messenger/instagram-icon.png`}
            />
          </a>
        </div>
        <div className={styles.footerInfo}>2022. produced by ParkJeongHo</div>
      </div>
    </div>
  );
}

export default Footer;
