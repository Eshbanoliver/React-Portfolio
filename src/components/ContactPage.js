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

const ContactPage = () => (
  <div className="min-h-screen py-20 px-6 flex items-center">
    <div className="max-w-4xl mx-auto">
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
          Let's Connect
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-pink-600 mx-auto mb-16"
          variants={fadeInUp}
        />
        
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-xl"
          variants={fadeInUp}
        >
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center space-x-3 p-4 rounded-xl hover:bg-pink-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">{portfolioData.contact.email}</p>
              </div>
            </motion.a>
            
            <motion.a
              href={`tel:${portfolioData.contact.phone}`}
              className="flex items-center space-x-3 p-4 rounded-xl hover:bg-pink-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600 text-sm">{portfolioData.contact.phone}</p>
              </div>
            </motion.a>
            
            <motion.a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-xl hover:bg-pink-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">💼</span>
              <div className="text-left">
                <p className="font-semibold text-gray-800">LinkedIn</p>
                <p className="text-gray-600 text-sm">Connect with me</p>
              </div>
            </motion.a>
            
            <motion.a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-xl hover:bg-pink-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🐙</span>
              <div className="text-left">
                <p className="font-semibold text-gray-800">GitHub</p>
                <p className="text-gray-600 text-sm">View my code</p>
              </div>
            </motion.a>
            
            <motion.div
              className="flex items-center space-x-3 p-4 rounded-xl"
            >
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600 text-sm">{portfolioData.contact.location}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default ContactPage;