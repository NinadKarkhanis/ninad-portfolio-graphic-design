import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
       
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a  href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a'><FaLinkedin ></FaLinkedin></a>
        <a  href='https://github.com/NinadKarkhanis'><FaGithub></FaGithub></a>
    </div>
  </nav>
}

export default Navbar
