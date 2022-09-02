// ----------------react & hooks-------------------------------------
import React, { useState } from 'react';
// ----------------style & css---------------------------------------
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// ----------------components & data---------------------------------
import { Images, ProjectData, Stack } from 'data/projectData';
import styles from './projects.module.css';
import { Modal, Slide } from '../../common';

function Projects() {
  const [projectData, setProjectData] = useState(ProjectData);
  const [images, setImages] = useState(Images);
  const [stack, setStack] = useState(Stack);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#72a1ec' }}>
      <div className={styles.projectBg}>
        <div className={styles.projectHead}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.projectHeadIcon} />
          PROJECTS
        </div>

        <Row style={{ margin: '0' }}>
          {projectData.map((data, i) => {
            return (
              <Col key={data.id} className={styles.project}>
                <article className={styles.card}>
                  <div className={styles.inner}>
                    <div className={styles.innerRow}>
                      <div className={styles.projectPhoto}>
                        <Slide images={images} i={i} />
                      </div>
                      <div className={styles.projectInfo}>
                        <div className={styles.projectTitle}>
                          <img
                            alt="타이틀(이미지없음)"
                            src={`${process.env.PUBLIC_URL}./static/images/projectImage/websiteTitle-icon.png`}
                            className={styles.navImg}
                          />
                          {data.Name}
                        </div>
                        <div className={styles.projectIntro}>
                          <img
                            alt="소개(이미지없음)"
                            src={`${process.env.PUBLIC_URL}./static/images/projectImage/websiteIntro-icon.png`}
                            className={styles.navImg}
                          />
                          {data.Intro}
                        </div>
                        <div>
                          {stack[i].map(stackData => {
                            return (
                              <div key={stackData} className={styles.projectStack}>
                                {stackData}
                              </div>
                            );
                          })}
                        </div>
                        <div className={styles.projectPeriod}>{data.Period}</div>
                      </div>
                    </div>
                    <div className={styles.modalBg}>
                      <button
                        type="button"
                        className={styles.modalBtn}
                        onClick={() => {
                          openModal();
                          setModalId(data.id);
                        }}
                      >
                        Go To Detail{' '}
                      </button>
                      <Modal
                        open={modalOpen}
                        close={closeModal}
                        openModal={openModal}
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        closeModal={closeModal}
                        modalId={modalId}
                      />{' '}
                    </div>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Projects;
