import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black px-4 py-4 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm mx-4">
        <p>
          © {new Date().getFullYear()} Aastha Sinha. All rights reserved.
        </p>
        <button
          onClick={handleScrollTop}
          className="text-gray-400 hover:text-white hover:scale-105 transition border-2 rounded-full p-2 border-gray-400 hover:border-white hover:cursor-pointer dark:text-black/50 dark:hover:text-black dark:border-black/50 dark:hover:border-black"
          title="Back to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
        <p className="italic text-gray-400 dark:text-black/50">Built with React & TailwindCSS</p>
      </div>
    </footer>
  );
}

export default Footer