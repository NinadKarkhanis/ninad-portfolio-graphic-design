import React from 'react';
import './ProjectsGrid.css';
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: 'Youtube Thumbnail', imageUrl: 'https://i.postimg.cc/fR9ZXZKF/1.png' },
  { id: 2, title: 'Instagram Post', imageUrl: 'https://i.postimg.cc/FF3Bjz50/Artboard-1-copy.png' },
  { id: 3, title: 'Project Three', imageUrl: 'https://i.postimg.cc/VknvwX3d/Artboard-1-copy-2.png' },
  { id: 4, title: 'Project Three', imageUrl: 'https://via.placeholder.com/300x400' },
  { id: 5, title: 'Project Three', imageUrl: 'https://via.placeholder.com/300x400' },
  { id: 6, title: 'Project Three', imageUrl: 'https://via.placeholder.com/300x400' },
  // Add more projects as needed
];

const ProjectsGrid = () => {
  return (
    <div className="projects-container ">
      <div className ="mb-8 flex flex-wrap lg:justify-center">
      <motion.h2 
    whileInView={{opacity: 1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className="my-20 text-center text-4xl">Projects</motion.h2>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
