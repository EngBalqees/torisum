import React, { useState } from 'react';
import './slider.css';

const DotSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="dot-slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={index === currentSlide ? slide.style : {}}
          >
             {Array.isArray(slide.title)
              ? slide.title.map((line, idx) => <h4 key={idx}>{line}</h4>)
              : <a href=''><h4>{slide.title}</h4></a>}

            {Array.isArray(slide.subtitle)
              ? slide.subtitle.map((line, idx) => <h2 key={idx}>{line}</h2>)
              :<a href=''> <h2>{slide.subtitle}</h2></a>}

            {Array.isArray(slide.description)
              ? slide.description.map((line, idx) => <p key={idx}>{line}</p>)
              : <p>{slide.description}</p>}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DotSlider;
