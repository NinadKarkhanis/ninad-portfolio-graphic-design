import { SiAdobephotoshop,SiAdobeillustrator,SiCanva,SiFigma,SiBlender } from "react-icons/si";
import Checkpoint from "../assets/checkpoint-fw.png"
import {motion} from "framer-motion"
const iconVariants =(duration) => ({
  inital:{y:-10},
  animate :{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
const Technologies = () => {
  return(
  <div className="container mx-auto px-4">
    <div className="mb-8 flex justify-center">
    <motion.h2  
    whileInView={{opacity: 1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className="my-20 text-center text-4xl">Skills & Tools</motion.h2>
    </div>
    <motion.div 
    whileInView={{opacity: 1, x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobephotoshop className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobeillustrator className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCanva  className="text-7xl" />
        </motion.div>
        <motion.div 
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFigma  className="text-7xl text-white-500" />
        </motion.div>
        <motion.div 
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBlender  className="text-7xl text-orange-500" />
        </motion.div>
        
    </motion.div>
  </div>
  );
}

export default Technologies
