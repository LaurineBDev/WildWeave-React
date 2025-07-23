import { useState } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
       <button className="prev" onClick={prevSlide}>‹</button>
       <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} /> 
       <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Slider;




