"use client"
import { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showArrow, setShowArrow] = useState(false);

  // Show arrow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#2f2f2f] text-white relative">
      {/* Back to Top Arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-16 md:bottom-10 p-3 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg transition-colors"
          aria-label="Back to Top">
          {/* Simple upward arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 py-10 flex items-center justify-center">
        <p className="text-sm md:text-base text-center tracking-wide">
          Victor Ozokwelu © {year}
        </p>
      </div>
    </footer>
  );
}
