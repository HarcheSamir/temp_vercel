import React, { useEffect, useRef } from 'react';

export default function Banner({items}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    const pixelsPerSecond = 50;
    let animationFrameId = null;
    let startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const distance = (elapsed / 1000) * pixelsPerSecond;
      
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = `translateX(-${distance}px)`;
        
        const scrollerWidth = scrollerRef.current.offsetWidth / 2;
        if (distance >= scrollerWidth) {
          startTime = currentTime - ((distance % scrollerWidth) / pixelsPerSecond * 1000);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden opacity-30"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
    >
      <div 
        ref={containerRef} 
        className="w-full overflow-hidden  "
      >
        <div 
          ref={scrollerRef}
          className="inline-flex items-center"
        >
          {items.map((item, index) => (
            <img 
              key={index} 
              className='h-12 mx-16' 
              alt='/' 
              src={'/assets/'+item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}