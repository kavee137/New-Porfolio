import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Layout, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutHighlights, focusAreas } from '../data/portfolioData';

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Layout: Layout,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Passionate about crafting exceptional digital experiences
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Detailed Bio & Focus Pills */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
              Frontend Engineer specializing in React & React Native ecosystems.
            </h3>
            
            <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
              {personalInfo.aboutDetailed}
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Whether building high-performance single-page web applications or cross-platform mobile apps for iOS and Android, I prioritize modular component structure, responsive styling, reliable state management, and seamless API integrations.
            </p>

            {/* Specialization List Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">
                Core Specialization & Focus Areas
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-800 text-xs font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 gap-5"
          >
            {aboutHighlights.map((item) => {
              const IconComponent = iconMap[item.icon] || Globe;
              return (
                <div
                  key={item.id}
                  className="group relative p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
