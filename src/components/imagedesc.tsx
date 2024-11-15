import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Trust from '../images/trust.png';
import './imagedesc.css'

interface Image {
  id: number;
  src: string;
  title: string;
  likes: number;
}

const ImageBrowser = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean[]>(Array(5).fill(false));

  const images: Image[] = [
    { id: 1, src: Trust, title: "23-24: Trust", likes: 245 },
    { id: 2, src: "/api/placeholder/800/600", title: "22-23: ", likes: 189 },
    { id: 3, src: "/api/placeholder/800/600", title: "21:22", likes: 302 },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleLike = (index: number) => {
    setIsLiked((prev) => {
      const newLikes = [...prev];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  return (
    <div className="container">
      <div className="image-browser">
        <div className="image-card">
          <div className="image-container">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="fade-in"
            />
            
            <button onClick={previousImage} className="nav-button prev">
              <ChevronLeft className="icon" />
            </button>
            <button onClick={nextImage} className="nav-button next">
              <ChevronRight className="icon" />
            </button>
          </div>

          <div className="image-info">
            <div className="info-container">
              <h2 className="image-title">{images[currentIndex].title}</h2>
              <div className="action-buttons">
                <button
                  onClick={() => toggleLike(currentIndex)}
                  className={`action-button ${isLiked[currentIndex] ? 'liked' : ''}`}
                >
                  <Heart className="icon" fill={isLiked[currentIndex] ? "currentColor" : "none"} />
                </button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail-nav">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`thumbnail-button ${currentIndex === index ? 'active' : ''}`}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBrowser;