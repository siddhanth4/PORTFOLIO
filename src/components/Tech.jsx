import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      <motion.div variants={textVariant()}>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        
      <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
        
      </div>
      </motion.div>
      

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
      
      </div>

      



    </div>



    
  );
};

export default SectionWrapper(Tech, "");
