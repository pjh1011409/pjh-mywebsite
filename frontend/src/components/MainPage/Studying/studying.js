// ----------------react & hooks-------------------------------------
import React, { useState } from 'react';
// ----------------style & css---------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap';
// ----------------components & data---------------------------------
import { StudyingData } from 'data/studyingData';
import { StudyingSlide } from '../../common';
import styles from './studying.module.css';

function Studying() {
  const [studyData, setStudyData] = useState(StudyingData);

  return (
    <div style={{ backgroundColor: '#20b2d8' }}>
      <div className={styles.studyingBg}>
        <div className={styles.studyingHead}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.studyingIcon} />
          Studying
        </div>
        <div className={styles.studyAlert}>현재 제가 운영 중인 개발 블로그입니다 😃</div>
        <Row className={styles.studyPostBg}>
          {studyData.map((data, i) => {
            return (
              <Col sm={2} className={styles.studyPost}>
                <div className={styles.post}>
                  <StudyingSlide i={i} />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Studying;
