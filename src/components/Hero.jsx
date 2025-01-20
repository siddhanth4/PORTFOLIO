import { motion } from "framer-motion";
import React from "react";
import '../VerticalHeading.css'; // Import the CSS file

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='responsive-container'>
          <img src='src\assets\dp.jpg' alt='logo' className='responsive-image' />
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Siddhanth Sakhare</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
             MERN stack Developer <br className='sm:block hidden' />
            and Cyber Security enthusiast
          </p>

          
        </div>
      </div>
      

      <ComputersCanvas />
 
      <div className="github-iframe-container">
        <iframe
          src="https://git-skyline.huakun.tech/contribution/github/siddhanth4/embed?year=2024&enableZoom=false"
          width="100%" /* Set iframe width to 100% of the div */
          height="100%" /* Set iframe height to 100% of the div */
          frameBorder="0"
        ></iframe>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
