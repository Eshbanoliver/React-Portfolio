import React, { useState } from 'react';
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

const tabs = [
  { label: 'All', key: 'All' },
  { label: 'WordPress Web Development', key: 'WordPress' },
  { label: 'App Development', key: 'App' },
  { label: 'Plugins', key: 'Plugin' },
  { label: 'Language', key: 'Language' },
  { label: 'Graphics', key: 'Graphics' },
];

const ProjectsPage = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (selectedTab === 'All') return true;
    return project.technologies.some((tech) =>
      tech.toLowerCase().includes(selectedTab.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-pink-600 mx-auto mb-10"
            variants={fadeInUp}
          />

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeInUp}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === tab.key
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-pink-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl p-8 shadow-xl"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>📁</span>
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>🚀</span>
                    <span>Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
