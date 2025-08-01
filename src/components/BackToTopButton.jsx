import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // You can install lucide icons or use any other icon library

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-black text-white hover:bg-white hover:text-black border border-white transition-all duration-300 p-3 rounded-full shadow-lg z-50"
        aria-label="Scroll to Top"
      >
        <ChevronUp size={24} />
      </button>
    )
  );
};

export default BackToTopButton;
