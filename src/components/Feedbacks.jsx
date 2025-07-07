import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, image }) => (
  <motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='p-100 rounded-3xl xs:w-[495px] w-full'
>
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='bg-black-20 p-5 rounded-2xl sm:w-[440px] w-full'
  > 
    <div className='relative w-full max-w-[400px] h-auto sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] aspect-video'>
      <img
        src={image}
        alt='testimonial_image'
        className='w-full h-full'
      />
    </div>
  </Tilt>
</motion.div>

);

const Feedbacks = () => {
  return (
    <div className={`mt-120 bg-black-100 rounded-[100px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What are my</p>
          <h2 className={styles.sectionHeadText}>Achievements & Participation</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} image={testimonial.image} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievements");
