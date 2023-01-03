import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styles from './modal.module.css';

function Modal(props) {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, setModalOpen, id } = props;
  const wrapperRef = useRef();

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      document.body.style.overflow = 'unset';

      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.

    <div className={open ? `${styles.modal}` : null} ref={wrapperRef}>
      {open ? (
        <section className={styles.modalSection}>
          <div role="presentation" className={styles.close} onClick={close}>
            <FontAwesomeIcon icon={faCircleXmark} size="2x" />
          </div>
          <main className={styles.modalMain}>
            {' '}
            <div className={styles.inner}>
              <h1 className={styles.projectName}> PJH&#39;s WebSite</h1>
              <p className={styles.aboutProject}>
                👋 개인 포트폴리오 사이트입니다. 필자에 대한 개인적인 정보와 커리어가 담긴 사이트이며, 더하여 개발스택,
                CS지식, 면접, 회고 등의 여러 글들을 게시할 수 있는 개인 블로그를 탑재하고 있습니다.
              </p>
              <p className={styles.projectDetail}>！ 상세한 내용은 github의 README를 통해 확인 가능</p>
              <h6 className={styles.projectURL}>
                📎 Project URL: <a href="{()=> false}">www.미확정.com</a>
              </h6>
              <h6 className={styles.projectReadMe}>
                📎 Project GitHub:{' '}
                <a href="https://github.com/pjh1011409/MyWebSite">https://github.com/pjh1011409/MyWebSite</a>
              </h6>
              <h5 className={styles.projectArchitecture}> 🗺 Project Architecture</h5>
              <img
                alt="타이틀(이미지없음)"
                src={`${process.env.PUBLIC_URL}./static/images/projectImage/projectArchitecture.png`}
                className={styles.ArchitectureImg}
              />
              <h5 className={styles.projectTools}> 🛠 Project Tools</h5>
              <h6 className={styles.frontend}>
                <b>Frontend:</b> HTML, CSS, JavaScript, TypeScript, React
              </h6>
              <h6 className={styles.backend}>
                <b>Backend:</b> Django REST Framework
              </h6>
              <h6 className={styles.database}>
                <b>Database:</b> MySQL
              </h6>
              <h6 className={styles.deployment}>
                <b>Deployment:</b> AWS S3, CloudFront, Amazon Route53, Githubaction, EC2, Nginx, Gunicorn, Redis, AWS
                RDS
              </h6>
              <h5 className={styles.projectFunction}> 💡 Project 주요기능</h5>
              <h6 className={styles.func}>➡️ 필자의 이력 및 자기소개와 개발프로젝트를 소개하는 페이지 구성</h6>
              <h6 className={styles.func}>➡️ 게시판 사용을 위한 로그인 기능</h6>
              <h6 className={styles.func}>➡️ CRUD(입력,조회,수정,삭제)기능과 검색 및 필터 기능이 포함된 게시판</h6>
              <h6 className={styles.func}>➡️ navigationBar & footerBar</h6>
              {/* {explain[props.modalId].map((data) => {
                                    return (
                                        
                                            <div key={data}>{data}</div>
                                        
                                    )
                                })} */}
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;
