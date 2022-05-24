 import {Row} from 'react-bootstrap'
 import styles from './title.module.css'

function Title() {
  return (
    <div>
      <Row className={styles.backGround}>
        <div className={styles.e}>
          <h2 className={styles.subTitle}>ParkJeongHo</h2>
          <h1 className={styles.title}>Welcome To My Site</h1>
        </div>
      </Row>
    </div>
  );
}

export default Title;