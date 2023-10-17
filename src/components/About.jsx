import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { ParallaxTilt } from "react-parallax-tilt"; // Import ParallaxTilt

// Define a basic fadeIn animation
const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: { opacity: 0, x: direction === "left" ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
      },
    },
  };
};

const ServiceCard = ({ index, title, icon }) => (
  <ParallaxTilt
    perspective={1000}
    glareEnable={true}
    glareMaxOpacity={0.6}
    scale={1.02}
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    gyroscope={true}
    style={{ width: "100%", marginBottom: "20px" }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="visible"
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </ParallaxTilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate="visible"
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Nest.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
