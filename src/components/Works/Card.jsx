import iconG from "../../assets/IconGithub.png";
import iconL from "../../assets/IconLink.png";
import { motion } from 'framer-motion';

const Card = ({ img, description, github, demo }) => {
  return (
    <motion.div 
      className="relative m-auto my-4 h-full w-[320px] md:w-[370px] p-4 bg-sky-500/30 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={img} className="w-full h-40 object-cover rounded-t-lg" alt="Project" />
      <div className="p-4">
        <p className="text-gray-2=300 text-sm  mt-5">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          <motion.a 
            href={github} 
            className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <img src={iconG} alt="Github" className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href={demo} 
            className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <img src={iconL} alt="Demo" className="h-6 w-6" />
          </motion.a>
        
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
