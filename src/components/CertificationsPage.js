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

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

const CertificationsPage = () => (
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
          Certifications
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-pink-600 mx-auto mb-16"
          variants={fadeInUp}
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white rounded-2xl p-6 shadow-xl"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              {/* Certificate Thumbnail */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  className="w-full h-48 object-contain"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <span className="text-white text-sm font-medium">{cert.year}</span>
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-pink-600 font-semibold mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                    Certified {cert.year}
                  </span>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-pink-600/10 rounded-2xl opacity-0 pointer-events-none"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default CertificationsPage;