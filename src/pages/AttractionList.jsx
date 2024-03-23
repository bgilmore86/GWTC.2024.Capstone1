import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slide = ({ image, isActive }) => (
  <div className={`slide ${isActive ? 'active' : ''}`}>
    <img src={image} alt='travel image' className='image' />
  </div>
);

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const ImageSlides = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length || 0;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => (
        <Slide key={index} image={slide.image} isActive={index === current} />
      ))}
    </section>
  );
};

ImageSlides.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlides;