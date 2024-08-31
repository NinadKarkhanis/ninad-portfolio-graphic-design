import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { X } from 'lucide-react';
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: 'Instagram Post', image: 'https://i.postimg.cc/3NZw51sh/coach.png', description: '' },
  { id: 2, title: 'Youtube Thumbnail', image: 'https://i.postimg.cc/bYgF6Mrv/thumbnail-girl.jpg', description: '' },
  { id: 3, title: 'Photo Manipulation', image: 'https://i.postimg.cc/kXrpF5Sx/fanta-ezgif-com-crop.gif', description: '' },
  { id: 4, title: 'Amazon Banner', image: 'https://i.postimg.cc/CMrsnVdb/image.png', description: '' },
  { id: 5, title: 'Logo Design', image: 'https://i.postimg.cc/c4ZtJ9Bf/Artboard-1-copy-3.png', description: '' },
  { id: 6, title: 'Jersey Design', image: 'https://i.postimg.cc/RZhF3j6J/jersey.png', description: '' },
  { id: 7, title: 'Poster Design', image: 'https://i.postimg.cc/DyHZXxqC/scam-1992-poster.png', description: '' },
  { id: 8, title: '3D T Shirt Mockups', image: 'https://s11.gifyu.com/images/SoYy9.gif', description: '' },
  { id: 9, title: 'Movie Poster Design', image: 'https://i.postimg.cc/wMJ6cp50/spidey-final.jpg', description: '' },
  { id: 10, title: '3D Train Animation', image: 'https://i.postimg.cc/vBg05RHq/DAY-VID.gif', description: '' },
  { id: 11, title: 'Game UI Screen', image: 'https://i.postimg.cc/G2PZSMfx/treasure-quest-ui.gif', description: '' },
  { id: 12, title: 'Instagram Carousel', image: 'https://i.postimg.cc/SxVmGV8F/doctor-strange-final.jpg', description: '' },
  { id: 13, title: 'Smoothie Advertisment', image: 'https://i.postimg.cc/D0cNKp77/SUPER-SMOOTHIE.jpg', description: '' },
  { id: 14, title: 'Vector Art', image: 'https://i.postimg.cc/159TKSKX/Tony-stark-vector.jpg', description: '' },
  { id: 15, title: 'Glass Effect Design', image: 'https://i.postimg.cc/TP7mBrzB/2w2.png', description: '' },
  { id: 16, title: 'Font Effects', image: 'https://i.postimg.cc/d09PF9wQ/stranger-endgame.jpg', description: '' },
  { id: 17, title: 'Isometric 3D Room', image: 'https://i.postimg.cc/KYLk6FQh/ddb25725-a809-455d-b999-fd6ef176dec5.jpg', description: '' },
  { id: 18, title: 'Horror House Photo Manipulation', image: 'https://i.postimg.cc/LsR2sp2p/08f7d358-4c33-4213-ad7b-1a36ad274d75.jpg', description: '' },
  { id: 19, title: 'Merging Photos', image: 'https://i.postimg.cc/ydpHn391/a5f6d95e-a2f0-4a3c-a6ce-d0c9528c7dc6.jpg', description: '' },
  { id: 20, title: 'PokeBalls using Blender', image: 'https://i.postimg.cc/pXb2S84r/3ecb1374-50ca-4503-a790-7dabbcfe14d0.jpg', description: '' },
  { id: 21, title: 'Explosion Animation', image: 'https://i.postimg.cc/MGv2HKNg/explosion-animation.gif', description: '' },
  { id: 22, title: 'Spaceship Animation', image: 'https://i.postimg.cc/3J7spZzX/ship.gif', description: '' },
  { id: 23, title: 'Personalized Vector Art', image: 'https://i.postimg.cc/qqBGBgZ3/523fa06f-c448-4184-9ecd-97eb17070d72.jpg', description: '' },
  { id: 24, title: 'Art Gallery App UI Screen', image: 'https://i.postimg.cc/j5qXtZ5X/atrovox-app-ui.gif', description: '' },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2
};

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (

    
    
    <div className="container mx-auto px-4">
      <div className ="mb-8 flex justify-center">
      <motion.h2 
    whileInView={{opacity: 1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className="my-20 text-center text-4xl">Projects</motion.h2>
      </div>

      
      <motion.div
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="bg-clip-padding px-2"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-purple-900 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 mb-4"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </Masonry>

      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-purple-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 bg-purple-900 rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;