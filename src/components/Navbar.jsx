import React, { useState } from 'react';
import { FaLinkedin , FaGithub} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import dp_logo from "../assets/Aastha_Photo.jpeg";
import { HiMenu, HiX } from 'react-icons/hi';
import toast from 'react-hot-toast';
import DarkModeToggle from './DarkModeToggle';


const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sinha2001aastha@gmail.com');
    toast.success('Email copied to clipboard!');
    // setMailClicked(true);
    // setTimeout(() => {
    //   setMailClicked(false);
    // }, 10000);
    // alert('Email copied to clipboard!');
  };
  
  const handleScroll = ({id}) =>{
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
   
  }
  
  const navLinks = [
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' }
  ];
  
  return (
    <nav className="z-50 fixed top-0 w-full backdrop-blur-md bg-black  shadow-md text-white px-4 dark:bg-white dark:text-black transition-colors duration-300">
      <div className="mx-auto px-4 py-2 flex items-center justify-between">
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, i) => (
            <p
              key={i}
              className=" hover:text-yellow-100 hover:scale-110 hover:cursor-pointer transition font-medium dark:hover:text-yellow-600"
              onClick={() => handleScroll({ id: link.id })}
            >
              {link.name}
            </p>
          ))}
        </div>
        {/* Hamburger menu toggle - visible only on mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
        
        {/* Right - Icons + Image */}
        <div className="flex items-center gap-6">
          <DarkModeToggle />
        <a
            href="https://github.com/Aastha863"
            target="_blank"
             rel="noopener noreferrer"
          >
            <FaGithub className="text-xl dark:hover:text-black hover:text-gray-400 hover:scale-105 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/aastha-sinha-03b3641a4/"
            target="_blank"
             rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-[#0078c7] hover:scale-105 transition" />
          </a>
          <button onClick={handleCopyEmail}>
            <SiGmail className="text-xl hover:text-red-600 hover:scale-105 transition " title="Copy Email"/>
          </button>
          <img
            src={dp_logo}
            alt="DP"
            className="h-8 w-8 rounded-full border-2 border-white hover:scale-105 dark:border-black"
          />
        </div>
      </div>
      
      
      
      {/* mobile view */}
      <div
        className={`fixed top-12 left-0 w-2/3 h-fit z-50 bg-gray-600/80 dark:bg-gray-200/50 backdrop-blur-lg p-6 flex flex-col gap-6 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* <div className="fixed top-12 left-0 w-3/4 h-screen z-50 bg-black/10 backdrop-blur-lg p-6 flex flex-col gap-6 md:hidden transition-transform duration-500 ease-in-out"> */}
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            className="text-white text-base hover:text-yellow-500 dark:text-black "
            onClick={() => handleScroll({id: link.id})} // Close on click
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar