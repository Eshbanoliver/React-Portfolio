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

const EducationPage = () => (
  <div className="min-h-screen py-20 px-6 flex items-center">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6"
          variants={fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-pink-600 mx-auto mb-16"
          variants={fadeInUp}
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu) => (
            <motion.div
              key={edu.id}
              className="bg-white rounded-2xl p-8 shadow-xl"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-pink-600 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default EducationPage;