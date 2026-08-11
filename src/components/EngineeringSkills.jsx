import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Workflow, Sparkles, Lightbulb, Zap } from 'lucide-react';
import { whatIBring } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  MonitorSmart: MonitorSmartphone,
  Workflow: Workflow,
  Sparkles: Sparkles,
  Lightbulb: Lightbulb,
  Zap: Zap
};

export default function EngineeringSkills() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Bring To Your Team
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-3">
            Key engineering capabilities and values that guide my software development process.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBring.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                key={item.title}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white border border-slate-200/80 group-hover:border-indigo-600 flex items-center justify-center mb-5 transition-all duration-300 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono font-semibold text-slate-400">
                  <span>Principle #0{index + 1}</span>
                  <span className="text-indigo-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
