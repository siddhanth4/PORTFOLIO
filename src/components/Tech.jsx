import React from "react";
import { styles } from "../styles";
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
          <div
            key={technology.name}
            className="w-28 h-28 bg-gray-200 flex items-center justify-center rounded-full shadow-lg border-4 border-gray-300 transition-transform transform hover:scale-110"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5)" }}
          >
            <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
