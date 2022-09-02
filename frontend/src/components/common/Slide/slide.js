import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({ images, i }) {
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

export default Slide;
