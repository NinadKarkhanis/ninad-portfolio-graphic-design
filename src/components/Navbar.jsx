import logo from "../assets/logo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';



const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
     <img className="mx-2 w-10" src={logo} alt="logo"></img>
    </div>
    <div className="flex space-x-4 text-neutral-400">
     <Link className="cursor-pointer hover:text-purple-500" to="about" smooth={true} duration={500}> About Me </Link>
     <Link className="cursor-pointer hover:text-purple-500" to="edu" smooth={true} duration={500}> Education </Link>
     <Link className="cursor-pointer hover:text-purple-500" to="exp" smooth={true} duration={500}> Work Experience </Link>
     <Link className="cursor-pointer hover:text-purple-500" to="tech" smooth={true} duration={500}> Technologies </Link>
     <Link className="cursor-pointer hover:text-purple-500" to="proj" smooth={true} duration={500}> Projects </Link>
     <Link className="cursor-pointer hover:text-purple-500" to="con" smooth={true} duration={500}> Contact Me </Link>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl  text-neutral-400'>
        <a className=" hover:text-purple-500" href='https://www.linkedin.com/in/ninad-karkhanis-121a7625a'><FaLinkedin ></FaLinkedin></a>
        <a className=" hover:text-purple-500" href='https://github.com/NinadKarkhanis'><FaGithub></FaGithub></a>
    </div>
  </nav>
}

export default Navbar
