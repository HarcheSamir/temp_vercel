import { useState, useEffect } from "react";

const useScrollDirection = (thresholdInRem = 20) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYInRem = window.scrollY / 16;
      const isScrollingUp = window.scrollY < lastScrollY;

      if (scrollYInRem >= thresholdInRem && isScrollingUp) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, thresholdInRem]);

  return showNavbar;
};

export default useScrollDirection;
