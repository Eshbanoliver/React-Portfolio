import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import face from '../assets/face.png'

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="text-center z-10 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative inline-block mb-8"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={face}
            alt={portfolioData.hero.name}
            className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl border-4 border-white"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-pink-400 opacity-50"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {portfolioData.hero.name}
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-pink-600 font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {portfolioData.hero.designation}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {portfolioData.hero.intro}
        </motion.p>
        
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.button
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Get In Touch
          </motion.button>
          <motion.button
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;