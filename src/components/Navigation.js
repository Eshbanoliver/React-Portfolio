import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <motion.nav 
    className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/">Eshban</Link>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Education', path: '/education' },
            { name: 'Certifications', path: '/certifications' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.path}
                className="text-gray-600 hover:text-pink-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navigation;