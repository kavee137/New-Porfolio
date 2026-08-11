import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, ArrowUpRight, Sparkles, MapPin, Calculator, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

// Custom Project Visual Thumbnails SVG/CSS representation
function ProjectVisual({ project }) {
  if (project.id === 'cloud-attend') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden text-white">
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded border border-blue-400/30">
            GOOGLE PLAY STORE
          </span>
          <span className="text-[10px] text-blue-300 font-mono">Firebase + QR</span>
        </div>
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center mb-2">
            <Smartphone className="w-7 h-7 text-blue-300" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-blue-100">CLOUD ATTEND APP</span>
          <span className="text-[10px] text-slate-400">QR Attendance & Staff Logging</span>
        </div>
        <div className="flex justify-between items-center z-10 text-[10px] font-mono text-slate-400">
          <span>Google AdMob</span>
          <span>Expo & EAS</span>
        </div>
      </div>
    );
  }

  if (project.id === 'calq-calculator') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-4 flex flex-col justify-between relative overflow-hidden text-white">
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded border border-emerald-400/30">
            GOOGLE PLAY STORE
          </span>
          <span className="text-[10px] text-emerald-300 font-mono">React Native</span>
        </div>
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center mb-2">
            <Calculator className="w-7 h-7 text-emerald-300" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-100">CALQ CALCULATOR</span>
          <span className="text-[10px] text-slate-400">Clean Arithmetic Engine</span>
        </div>
        <div className="flex justify-between items-center z-10 text-[10px] font-mono text-slate-400">
          <span>TailwindCSS</span>
          <span>Expo Android</span>
        </div>
      </div>
    );
  }

  if (project.id === 'naviq-bus-tracking') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden text-white">
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono bg-sky-500/30 text-sky-200 px-2 py-0.5 rounded border border-sky-400/30">
            REAL-TIME GPS
          </span>
          <span className="text-[10px] text-sky-300 font-mono">Live ETA</span>
        </div>
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-sky-600/30 border border-sky-400/40 flex items-center justify-center mb-2">
            <MapPin className="w-7 h-7 text-sky-300" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-sky-100">NAVIQ BUS TRACKING</span>
          <span className="text-[10px] text-slate-400">Geolocation & Firebase Sync</span>
        </div>
        <div className="flex justify-between items-center z-10 text-[10px] font-mono text-slate-400">
          <span>Interactive Maps</span>
          <span>APK Build</span>
        </div>
      </div>
    );
  }

  if (project.id === 'ai-dog-identifier') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden text-white">
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded border border-indigo-400/30">
            GEMINI VISION AI
          </span>
          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> AI Active
          </span>
        </div>
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center mb-2 shadow-inner">
            <Sparkles className="w-7 h-7 text-indigo-300 animate-pulse" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-100">DOG BREED IDENTIFIER</span>
          <span className="text-[10px] text-slate-400">AI Powered Camera Recognition</span>
        </div>
        <div className="flex justify-between items-center z-10 text-[10px] font-mono text-slate-400">
          <span>AdMob Monetized</span>
          <span>React Native</span>
        </div>
      </div>
    );
  }

  // Classified ads platform
  return (
    <div className="w-full h-48 bg-gradient-to-br from-violet-950 via-slate-900 to-purple-950 p-4 flex flex-col justify-between relative overflow-hidden text-white">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-mono bg-violet-500/30 text-violet-200 px-2 py-0.5 rounded border border-violet-400/30">
          FULLSTACK WEB
        </span>
        <span className="text-[10px] text-purple-300 font-mono">Spring Boot + React</span>
      </div>
      <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center mb-2">
          <Layers className="w-7 h-7 text-purple-300" />
        </div>
        <span className="text-xs font-mono font-bold tracking-wider text-purple-100">MARKETPLACE PLATFORM</span>
        <span className="text-[10px] text-slate-400">JWT Auth • MySQL • REST</span>
      </div>
      <div className="flex justify-between items-center z-10 text-[10px] font-mono text-slate-400">
        <span>Buyers & Sellers</span>
        <span>Hibernate ORM</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => {
        if (filter === 'mobile') return p.category === 'mobile';
        if (filter === 'web') return p.category === 'web';
        return true;
      });

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Apps
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-3">
            Real-world mobile applications deployed to Google Play Store and fullstack platforms built with React Native and modern technologies.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'web', label: 'Web Applications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const primaryLink = project.playStore || project.liveUrl || project.github;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Visual Thumbnail */}
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden relative"
                    aria-label={`View ${project.title}`}
                  >
                    <ProjectVisual project={project} />
                  </a>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                        {project.tag}
                      </span>
                      {project.badgeType && (
                        <span className="text-[10px] font-semibold text-slate-400 uppercase">
                          {project.badgeType}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer Direct Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      {project.playStore ? (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Google Play</span>
                        </a>
                      ) : project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span />
                      )}

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            aria-label="GitHub Repository"
                            title="GitHub Source"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && !project.playStore && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            aria-label="Live Demo"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
