import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileText, Sparkles, CheckCircle2, Terminal, Code2, Cpu, Smartphone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCvModal }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      const offsetTop = projectsSec.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-grid-pattern overflow-hidden">
      {/* Gradient Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/40 via-blue-100/30 to-violet-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gradient-to-br from-indigo-100/50 to-emerald-100/40 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-6 text-xs font-semibold text-slate-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Frontend Engineer building{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 bg-clip-text text-transparent">
                clean, scalable & engaging
              </span>{' '}
              digital experiences.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 w-full">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors shadow-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-indigo-600 transition-colors shadow-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-indigo-600 transition-colors shadow-xs"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Visual Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden"
            >
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-[11px] font-mono font-medium text-slate-600">
                  <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                  <span>developer.config.ts</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Developer Tag Banner */}
              <div className="mb-5 inline-block px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono font-bold text-sm">
                &lt;Frontend Engineer /&gt;
              </div>

              {/* Tech Stack Pills Badge */}
              <div className="flex flex-wrap gap-2 mb-6">
                {personalInfo.devCardSnippet.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-semibold border border-slate-200/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Code Snippet Card */}
              <div className="rounded-xl bg-slate-900 text-slate-200 p-4 font-mono text-xs leading-relaxed shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800 text-[10px]">
                  <span>// Engineer State</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
                <pre className="text-slate-300">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="text-slate-400">name:</span> <span className="text-emerald-300">"Kaveesha Rukshan"</span>,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">passion:</span> <span className="text-emerald-300">"building products"</span>,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">focus:</span> <span className="text-emerald-300">"user experience"</span>,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">platforms:</span> [<span className="text-amber-300">"Web"</span>, <span className="text-amber-300">"Mobile"</span>]<br />
                  &#125;;
                </pre>
              </div>

              {/* Interactive Mini Badge overlay */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Clean Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Pixel-Perfect UI
                </span>
              </div>
            </motion.div>

            {/* Decorative Floating Badges */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Web Frontend</p>
                <p className="text-[10px] text-slate-500">React & Next-level UI</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Mobile Apps</p>
                <p className="text-[10px] text-slate-500">React Native & Expo</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
