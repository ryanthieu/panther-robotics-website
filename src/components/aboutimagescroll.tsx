import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './imagescroll.css';
import East from '../images/east.png'
import Outreach from '../images/outreachex.png'
import Panther from '../images/panther.png'


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
    <div className="homeslideshow">
      <div className="slideshow-content">
        {slides[currentSlide].content}
      </div>
      
      <button onClick={prevSlide} className="homeslideshow-button homeslideshow-button-left">
        <ChevronLeft size={24} />
      </button>
      
      <button onClick={nextSlide} className="homeslideshow-button homeslideshow-button-right">
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
const AboutImageScroll = () => {
  const slides = [
    { content: (
    <div>
    <h1>23-24: Trust</h1>
    <div className="slide-grid">
        <div className="slide-grid-image">
            <img src={East} alt="East"/>
        </div>
        <div className="side-grid-text">
            <h1>example</h1>
        </div>
    </div>
    </div>


)},
    { content: <img src={Outreach} alt="outreach"/> },
    { content: <img src={Panther} alt="panther"/> },
  ];

  return <Slideshow slides={slides} />;
};

export default AboutImageScroll;