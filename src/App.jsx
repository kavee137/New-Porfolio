import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import WebMobileShowcase from './components/WebMobileShowcase';
import EngineeringSkills from './components/EngineeringSkills';
import Experience from './components/Experience';
import DesignUiUx from './components/DesignUiUx';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CvModal from './components/CvModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Technology Stack Section */}
        <TechStack />

        {/* Featured Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Web + Mobile Development Showcase */}
        <WebMobileShowcase />

        {/* Engineering Skills / What I Bring */}
        <EngineeringSkills />

        {/* Career Experience Timeline */}
        <Experience />

        {/* Design Meets Development (UI/UX) */}
        <DesignUiUx />

        {/* Quick Stats Section */}
        <Stats />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
