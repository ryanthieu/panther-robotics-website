import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './robot.css';
import Trust from '../../images/trust.png'

interface SlideProps {
  content: React.ReactNode;
}

interface SlideshowProps {
  slides: SlideProps[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      <div className="slideshow-content">
        {slides[currentSlide].content}
      </div>
      
      <button onClick={prevSlide} className="slideshow-button slideshow-button-left">
        <ChevronLeft size={24} />
      </button>
      
      <button onClick={nextSlide} className="slideshow-button slideshow-button-right">
        <ChevronRight size={24} />
      </button>

      <div className="slideshow-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slideshow-indicator ${
              index === currentSlide ? 'slideshow-indicator-active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const ExampleSlideshow = () => {
  const slides = [
    { content: (
    <div>
    <h1>23-24: Trust</h1>
    <div className="slide-grid">
        <div className="slide-grid-image">
            <img src={Trust} alt="trust"/>
        </div>
        <div className="side-grid-text">
            <h2 >trust is </h2>
        </div>
    </div>
    </div>


)},
    { content: <p className="slide-text">22-23 robot</p> },
    { content: <p>21-22 robot</p> },
  ];

  return <Slideshow slides={slides} />;
};

export default ExampleSlideshow;