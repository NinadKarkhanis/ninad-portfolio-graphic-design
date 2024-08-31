import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "tech", label: "Tools" },
    { to: "proj", label: "Projects" },
    { to: "exp", label: "Work Experience" },
    { to: "edu", label: "Education" },
    { to: "con", label: "Contact Me" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className='flex items-center'>
          <img className="logo w-10 mr-4" src={logo} alt="logo" />
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.to} className="nav-link text-neutral-300 hover:text-purple-300 transition-colors" to={link.to} smooth={true} duration={500}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='hidden md:flex items-center gap-4 text-2xl text-neutral-400'>
          {/* <a className="social-icon hover:text-purple-300 transition-colors" href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className="social-icon hover:text-purple-300 transition-colors" href='https://github.com/NinadKarkhanis' target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-2xl text-neutral-100">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral-800 p-4"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              className="block py-2 text-neutral-300 hover:text-purple-300 transition-colors" 
              to={link.to} 
              smooth={true} 
              duration={500} 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 mt-4 text-2xl text-neutral-400">
            {/* <a className="social-icon hover:text-purple-300 transition-colors" href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className="social-icon hover:text-purple-300 transition-colors" href='https://github.com/NinadKarkhanis' target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
          </div>
        </motion.div>
      )}
    </nav>
    
  );
}

export default Navbar;