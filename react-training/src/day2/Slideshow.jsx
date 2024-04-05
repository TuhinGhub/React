
import React, { useState, useEffect } from 'react';

const Slideshow = ({ interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };


  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(nextSlide, interval);
    }
    return () => clearInterval(intervalId);
  }, [currentSlide, isPaused]);

  const images = ['/doc1-page-0.png','/nubelson-fernandes-6di-4M9QRpg-unsplash.jpg',
      '/pngwing.com.png'
    
  ];

  return (
    <div className="slideshow">
      <img style={{height: "200px", width: "200px"}} src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div className="controls">
        <button onClick={togglePause}>{isPaused ? 'Play' : 'Pause'}</button>
      </div>
    </div>
  );
};

export default Slideshow;
