import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1033);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1033);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="mb-20 flex items-center justify-between py-6"
    >
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      
      {isMobile ? (
        <div className="relative">
          <button onClick={toggleMenu} className="text-neutral-400 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          {isOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="about" smooth={true} duration={500} onClick={toggleMenu}>About Me</Link>
              <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="edu" smooth={true} duration={500} onClick={toggleMenu}>Education</Link>
              <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="exp" smooth={true} duration={500} onClick={toggleMenu}>Work Experience</Link>
              <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="tech" smooth={true} duration={500} onClick={toggleMenu}>Technologies</Link>
              <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="proj" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
              <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="con" smooth={true} duration={500} onClick={toggleMenu}>Contact Me</Link>
              <div className="flex items-center justify-center gap-4 text-2xl text-neutral-400 mt-2">
                <a className="hover:text-purple-300" href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a'><FaLinkedin /></a>
                <a className="hover:text-purple-300" href='https://github.com/NinadKarkhanis'><FaGithub /></a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="m-4 sm:m-6 md:m-8 lg:m-10 flex flex-wrap items-center justify-center gap-4 text-neutral-400 text-sm">
            <Link className="cursor-pointer hover:text-purple-300 hover:glow" to="about" smooth={true} duration={500}>About Me</Link>
            <Link className="cursor-pointer hover:text-purple-300 hover:glow" to="edu" smooth={true} duration={500}>Education</Link>
            <Link className="cursor-pointer hover:text-purple-300 hover:glow" to="exp" smooth={true} duration={500}>Work Experience</Link>
            <Link className="cursor-pointer hover:text-purple-300 hover:glow" to="tech" smooth={true} duration={500}>Technologies</Link>
            <Link className="cursor-pointer hover:text-purple-300 hover:glow" to="proj" smooth={true} duration={500}>Projects</Link>
            <Link className="cursor-pointer hover:text-purple-300 hover:glow" to="con" smooth={true} duration={500}>Contact Me</Link>
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl text-neutral-400'>
            <a className="hover:text-purple-300" href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a'><FaLinkedin /></a>
            <a className="hover:text-purple-300" href='https://github.com/NinadKarkhanis'><FaGithub /></a>
          </div>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;
