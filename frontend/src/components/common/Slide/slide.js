import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StudyingData } from 'data/studyingData';
import styles from './slide.module.css';

function ProjectSlide({ images, i }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} class="slick">
      {images[i].map(img => {
        return (
          <div
            key={img}
            style={{
              width: '100%',
              margin: '0 auto',
            }}
          >
            <img
              src={`./static/images/projectImage/${img}`}
              style={{
                width: '90%',
                height: '400px',
                margin: '0 auto',
              }}
              alt="프로젝트 준비중"
            />
          </div>
        );
      })}
    </Slider>
  );
}

function StudyingSlide({ i }) {
  const [studyData, setStudyData] = useState(StudyingData);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} class="slick">
      {studyData[i].map(study => {
        return (
          <div key={study.Explain}>
            <img
              src={`./static/images/studyingPost/${study.Images}`}
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px 15px 0px 0px',
              }}
              alt="프로젝트 준비중"
            />
            <div className={styles.studyName}> {study.Name}</div>
            <div className={styles.studyExplain}>: {study.Explain}</div>
            <div className={styles.velogSite}>
              👉 게시글: &nbsp; <a href={study.Site}> {study.SiteName}</a>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export { ProjectSlide, StudyingSlide };
