// ----------------react & hooks-------------------------------------
import React, { useState } from 'react';
// ----------------style & css---------------------------------------
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// ----------------components & data---------------------------------
import { StackData, HardSkill, SoftSkill } from 'data/techStackData';
import styles from './techStack.module.css';

function TechStack() {
  const [stackData, setStackData] = useState(StackData);
  const [hardSkill, setHardSkill] = useState(HardSkill);
  const [softSkill, setSoftSkill] = useState(SoftSkill);

  return (
    <div style={{ backgroundColor: '#5798a1' }}>
      <div className={styles.techBg}>
        <div className={styles.techStackHead}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.techStackIcon} />
          TECHSTACK
        </div>
        <Row className={styles.row}>
          {stackData.map((data, i) => {
            return (
              <div key={data.id} className={styles.col}>
                <div className={styles.card}>
                  <Row>
                    <Col sm={3} className={styles.cardLeft}>
                      <div className={styles.stackName}>
                        <div>{data.stackName}</div>
                      </div>
                    </Col>
                    <Col sm={9} className={styles.cardRight}>
                      <div className={styles.cardSkill}>Hard Skill</div>
                      {hardSkill[i].map(img => {
                        return (
                          <img
                            alt="하드스킬(이미지없음)"
                            key={img}
                            src={`${process.env.PUBLIC_URL}./static/images/icons/${img}`}
                          />
                        );
                      })}
                      <div className={styles.cardSkill}>Soft Skill</div>
                      {softSkill[i].map(img => {
                        return (
                          <img
                            alt="소프트스킬(이미지없음)"
                            key={img}
                            src={`${process.env.PUBLIC_URL}./static/images/icons/${img}`}
                          />
                        );
                      })}
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default TechStack;
