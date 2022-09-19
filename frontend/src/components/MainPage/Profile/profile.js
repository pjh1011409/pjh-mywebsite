import React from 'react';
import styles from './profile.module.css';

function Profile({ handleIndexClick }) {
  return (
    <div className={styles.profileBg}>
      <div className={styles.profileMain}>
        <div className={styles.wrapper1}>
          <div className={styles.bg}> Hi Everyone </div>
          <div className={styles.fg}> Hi Everyone </div>
        </div>

        <div className={styles.wrapper2}>
          <div className={styles.bg}> Welcome To My World </div>
          <div className={styles.fg}> Welcome To My World </div>
        </div>
        <div className={styles.wrapper3}>
          <div className={styles.bg}> I&#39;m a FrontEnd Developer </div>
          <div className={styles.fg}>I&#39;m a FrontEnd Developer </div>
        </div>
        <div className={styles.btnGrid}>
          <button type="button" onClick={() => handleIndexClick(0)} className={styles.aboutMore}>
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
