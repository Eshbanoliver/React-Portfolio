import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutPage = () => (
  <div className="min-h-screen py-20 px-6 flex items-center">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          variants={fadeInUp}
        >
          {portfolioData.about.title}
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-pink-600 mx-auto mb-8"
          variants={fadeInUp}
        />
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
          variants={fadeInUp}
          whileHover={{ y: -5 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            <ul>
              <li>I am currently pursuing my Fourth Semester Master's Degree in Computer Application. I have built a solid foundation in front-end development, particularly in areas such as H.T.M.L., C.S.S., Javascript, alongwith the basic knowledge of Python, React Native and GitHub.</li>
              <br/>
              <li>My expertise in these areas allows me to approach projects with confidence and deliver high-quality results.I have a strong belief in the value of continuous learning and staying adaptable in the ever-evolving world of Web Development.</li>
              <br/>
              <li>I actively seek out opportunities to expand my knowledge and skills, embracing new technologies and approaches.Feel free to explore my work and get in touch if you have any questions or opportunities to collaborate. </li>
            </ul>
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default AboutPage;