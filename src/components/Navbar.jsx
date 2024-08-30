import React from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav 
      className="navbar mb-20 py-6"
    >
      <div className='flex items-center'>
        <img className="logo mx-2 w-10" src={logo} alt="logo" />
        <div className="hidden md:flex items-center gap-6 ml-4">
          <Link className="nav-link  text-neutral-300" to="tech" smooth={true} duration={500}>Tools</Link>
          <Link className="nav-link  text-neutral-300" to="proj" smooth={true} duration={500}>Projects</Link>
          <Link className="nav-link  text-neutral-300" to="exp" smooth={true} duration={500}>Work Experience</Link>
          <Link className="nav-link  text-neutral-300" to="edu" smooth={true} duration={500}>Education</Link>
          <Link className="nav-link  text-neutral-300" to="con" smooth={true} duration={500}>Contact Me</Link>
        </div>
        {/* <div className='hidden md:flex items-center gap-4 ml-auto text-2xl text-neutral-400'>
          <a className="social-icon" href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a'><FaLinkedin /></a>
          <a className="social-icon" href='https://github.com/NinadKarkhanis'><FaGithub /></a>
        </div> */}
      </div>
      <div className="md:hidden flex items-center ml-auto">
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
        {isOpen && (
          <div className="absolute top-16 right-0 bg-neutral-100 p-4 w-48 rounded-md shadow-lg z-20">
            <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About Me</Link>
            <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="edu" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Education</Link>
            <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="exp" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Work Experience</Link>
            <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="tech" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Technologies</Link>
            <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="proj" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
            <Link className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" to="con" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact Me</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
