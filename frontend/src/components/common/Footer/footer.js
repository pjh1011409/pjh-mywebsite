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
          <img
            alt="깃헙(이미지없음)"
            className={styles.icon}
            src={`${process.env.PUBLIC_URL}/static/images/icons/github-icon.png`}
          />

          <img
            alt="인스타(이미지없음)"
            className={styles.icon}
            src={`${process.env.PUBLIC_URL}/static/images/messenger/instagram-icon.png`}
          />
        </div>
        <div className={styles.footerInfo}>2022. produced by ParkJeongHo</div>
      </div>
    </div>
  );
}

export default Footer;
