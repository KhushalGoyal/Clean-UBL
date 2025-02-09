import React, { useState, useEffect } from 'react';
import './CircularCarousel.css';

const CircularCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  // To cycle automatically every 3 seconds (optional)
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-circle">
        {items.map((item, index) => {
          const angle = (index / totalItems) * 360;
          const offset = 200; // Distance from the center
          const x = Math.cos((angle * Math.PI) / 180) * offset;
          const y = Math.sin((angle * Math.PI) / 180) * offset;

          return (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? 'active' : ''
              }`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
            >
              <div className="carousel-content">
                <img src={item.image} alt={item.text} />
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="prev" onClick={goToPrev}>
        &lt;
      </button>
      <button className="next" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default CircularCarousel;
