// ----------------react & hooks-------------------------------------
import React, { useContext } from 'react';
// ----------------style & css---------------------------------------
import { Row, Col } from 'react-bootstrap';
// ----------------components & data---------------------------------
import { Footer, LoginRecordHeader } from 'components/common';
// ------------------authentication(utils & context)---------------------------
import AuthContext from 'context/AuthContext';
import styles from './login.module.css';

function LoginPage() {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className={styles.fullLayout}>
      <LoginRecordHeader />
      <div className={styles.loginBg}>
        <div className={styles.loginCard}>
          <Row className={styles.loginCardRow}>
            <Col sm={6} className={styles.signUp}>
              <div className={styles.signUpInner}>
                <h1>
                  Welcome !{' '}
                  <img
                    className={styles.welcomeIcon}
                    src={`${process.env.PUBLIC_URL}./static/images/login/welcome-icon.png`}
                    alt="환영합니다(이미지없음)"
                  />
                </h1>
                <p>Register to use this site &#39;s personal blog</p>
                <p>👇 Please sign up to log in</p>
                <button type="button" className={styles.signUpBtn}>
                  Sign Up
                </button>
              </div>
            </Col>
            <Col sm={6} className={styles.signIn}>
              <div className={styles.signInInner}>
                <h2>Login In</h2>
                <form onSubmit={loginUser}>
                  <input className={styles.userName} type="text" name="username" placeholder="Enter Username" />
                  <input className={styles.password} type="password" name="password" placeholder="Enter Password" />
                  <p className={styles.forgot}>Forgot your ID/Password?</p>
                  <input className={styles.signInBtn} type="submit" value="Sign In" />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
