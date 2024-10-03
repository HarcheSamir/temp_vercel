import React, { useState, useRef, useEffect } from 'react';

const CalculationsCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(0);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const calculateTotalDots = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const totalWidth = Array.from(carouselRef.current.children).reduce(
          (sum, child) => sum + child.offsetWidth,
          0
        );
        setTotalDots(Math.ceil(totalWidth / containerWidth));
      }
    };

    calculateTotalDots();
    window.addEventListener('resize', calculateTotalDots);

    return () => window.removeEventListener('resize', calculateTotalDots);
  }, []);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = 'grabbing'; // Change cursor to grabbing
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = 'grab'; // Change cursor back to grab
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = 'grab'; // Change cursor back to grab
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll-fast
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = 'grabbing'; // Change cursor to grabbing
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = 'grab'; // Change cursor back to grab
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();
    const x = e.touches[0].clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll-fast
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full select-none">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth cursor-grab" // Set initial cursor style
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {items.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            className={`w-[30px] h-[3px] rounded-full mx-1 ${
              index === currentIndex ? 'bg-zinc-700' : 'bg-gray-300'
            }`}
            onClick={() => scrollToIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CalculationsCarousel;
