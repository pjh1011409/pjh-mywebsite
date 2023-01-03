// ----------------react & hooks-------------------------------------
import React, { useState } from 'react';
// ----------------style & css---------------------------------------
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// ----------------components & data---------------------------------
import { AboutMeData, AboutMeImage } from 'data/aboutMeData';
import styles from './aboutMe.module.css';

function AboutMe() {
  const [image, setImage] = useState(AboutMeImage);
  const [data, setData] = useState(AboutMeData);

  const [href, setHref] = useState([
    'https://www.notion.so/FE-Developer-49b3dae4389842d1bc1aac561b1a671f',
    'https://velog.io/@pjh1011409',
    'https://github.com/pjh1011409',
    'https://www.instagram.com/invites/contact/?i=1sdkt27ej1q0q&utm_content=1ipqsn5',
  ]);
  return (
    <div style={{ backgroundColor: '#0078AA' }}>
      <div className={styles.aboutMeBg}>
        <div className={styles.aboutMeHead}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.aboutMeIcon} />
          ABOUT ME
        </div>
        <Row xs={1} md={2} className={styles.aboutMain}>
          <Col className={styles.aboutPart1}>
            <div className={styles.aboutImg}>
              <img alt="프로필(이미지없음)" src={`${process.env.PUBLIC_URL}./static/images/profile/${data.image}`} />
            </div>
          </Col>
          <Col className={styles.aboutPart2}>
            <div className={styles.aboutIntro}>
              <h2>{data.name}</h2>
              <h3>{data.englishName}</h3>
              <div className={styles.aboutText}>{data.text}</div>
            </div>
          </Col>

          <div className={styles.aboutFooter}>
            <div className={styles.aboutSns}>
              <div className={styles.messsengerDiv}>
                {image.map((img, i) => {
                  return (
                    <a href={href[i]}>
                      <img
                        alt="메신저(이미지없음)"
                        className={styles.messenger}
                        key={img}
                        src={`${process.env.PUBLIC_URL}./static/images/messenger/${img}`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
