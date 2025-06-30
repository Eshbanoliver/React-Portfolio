import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EducationPage from './components/EducationPage';
import CertificationsPage from './components/CertificationsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="pink-glow-fixed"></div>
        <Navigation />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/workexperience" element={<WorkExperience />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;