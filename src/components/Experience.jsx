import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work & Practical Experience
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-3">
            My professional trajectory and internship contributions in frontend and mobile software development.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceTimeline.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={idx}
              className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group"
            >
              {/* Timeline Vertical Line */}
              <div className="absolute left-3 sm:left-4 top-3 bottom-0 w-0.5 bg-indigo-200 group-last:hidden" />

              {/* Timeline Bullet Node */}
              <div className="absolute left-0 top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30 ring-4 ring-slate-50">
                <Briefcase className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                    <Building2 className="w-3.5 h-3.5" />
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  {exp.role}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Key Deliverables & Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                    Key Contributions & Responsibilities
                  </h4>
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
