'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState('/images/placeholder.jpg');
  const images = Array.from({ length: 100 }, (_, i) => `/images/seal${i + 1}.jpg`);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getAdaptiveTextColor = () => {
    return {
      color: 'white',
      textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 165, 0, 0.7)'
    };
  };

  return (
    <header className="relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})`, filter: 'blur(4px)' }}
        ></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-[50px] font-bold" style={getAdaptiveTextColor()}>
            Seal of 100K
          </h1>
          <p className="text-[35px] font-bold mt-4" style={getAdaptiveTextColor()}>
            Connecting art, mythology, history of humanity with Bitcoin
          </p>
        </div>
      </div>
    </header>
  );
}
