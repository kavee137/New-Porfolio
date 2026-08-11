import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Mail, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { personalInfo, techStack, projects, experienceTimeline } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Curriculum Vitae</h3>
                <p className="text-xs text-slate-400 font-mono">Kaveesha Rukshan — Frontend Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-800 font-sans text-sm">
            {/* Header info */}
            <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">{personalInfo.name}</h1>
                <p className="text-indigo-600 font-bold text-sm">{personalInfo.title}</p>
                <p className="text-slate-500 text-xs mt-1">{personalInfo.location}</p>
              </div>
              <div className="text-xs space-y-1 text-slate-600 font-mono">
                <p>Email: {personalInfo.socials.email}</p>
                <p>GitHub: {personalInfo.socials.github}</p>
                <p>LinkedIn: {personalInfo.socials.linkedin}</p>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1.5 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Professional Summary
              </h2>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                {personalInfo.aboutDetailed}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> Experience
              </h2>
              {experienceTimeline.map((exp, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-[11px] font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{exp.description}</p>
                  <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Technical Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech.name} className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Key Projects
              </h2>
              <div className="space-y-2">
                {projects.slice(0, 3).map((p) => (
                  <div key={p.id} className="p-3 rounded-lg border border-slate-200 text-xs">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{p.title} ({p.tag})</span>
                    </div>
                    <p className="text-slate-600 mt-1">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
