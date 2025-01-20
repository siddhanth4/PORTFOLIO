import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import '../VerticalHeading.css'; // Import the CSS file

import { styles } from "../styles";
import { services } from "../constants"; // Assuming this contains the necessary service data
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


// Import images from the assets folder
import logo1 from '../assets/links/linkedin.png';
import logo2 from '../assets/links/git.png';
import logo3 from '../assets/links/gc.png';
import logo4 from '../assets/links/gdsc.png';
import logo5 from '../assets/links/insta.jpeg';



const ServiceCard = ({ index, title, icon, url }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        onClick={() => window.open(url, '_blank')} // Opens URL in a new tab
        style={{ cursor: 'pointer' }} // Makes the entire card clickable
      >
        <img
          src={icon}
          alt={title} // Updated alt to reflect the title
          className="w-30 h-30 object-contain"
          width={200}
          height={624}
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);




const CircularCards = () => {
  const cards = [
    { link: 'https://www.linkedin.com/in/siddhanth-kishor-sakhare-159653257/', image: logo1 },
    { link: 'https://github.com/siddhanth4', image: logo2 },
    { link: 'https://www.cloudskillsboost.google/public_profiles/29b3d401-7564-42a8-91fa-9dc9c8876548', image: logo3 },
    { link: 'https://g.dev/siddhanth_s4', image: logo4 },
    { link: 'https://www.instagram.com/siddhanth_s4', image: logo5 },
  ];

  return (


    <div className="cards-container">

      {cards.map((card, index) => (
        <div 
          key={index} 
          className="circular-card" 
          onClick={() => window.open(card.link, '_blank')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') window.open(card.link, '_blank'); }}
          style={{ textAlign: 'center' }}
        >
          <img 
            src={card.image} 
            alt={`Logo ${index + 1}`} 
            className="circular-card-image"
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              objectFit: 'cover' // Ensures the image fits within the circular frame
            }} 
          />
        </div> 
      ))} 
    </div>
  );
};












const About = () => {
  return (
    <>


       


      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Cyber Security enthusiast with a passion for web development 👨🏻‍💻. <br /> 
        Currently pursuing 🎓 B.Tech in Cyber Security from G H Raisoni College of Engineering and Management Nagpur.
        <br />
        Other than technical skills, I love photography 📷 and video editing 📹. <br />
        And I continually 🚀 push myself to increase my knowledge and skill set because I enjoy learning new things and challenging myself.
      </motion.p> 
     <br></br>        <br></br>    
     <br></br>    
     <br></br>    
 

     
      

      <br />
      <div className="main" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div className="vertical-heading-container" style={{ marginRight: '10px' }}>
          <p className="vertical-heading" style={{ display: 'flex', alignItems: 'flex-start', height: '223%' }}>Badges</p>
        </div>
        <br />
        
        <div className="mt-5 flex flex-wrap gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div> 
        
        
      </div>
      
      <br />
    </>
  );
};

export default SectionWrapper(About, "about");
