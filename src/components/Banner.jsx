import React, { useEffect, useRef } from 'react';

export default function Banner({ items }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
    >
      <div ref={scrollerRef} className="scroller inline-flex items-center">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
