import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, FileCode2, Globe, Palette, Sparkles, LayoutGrid,
  Smartphone, Zap, Coffee, Server, ArrowRightLeft, KeyRound,
  FileJson, Database, Flame, GitBranch, Send,
  Terminal, Code, Megaphone, ShieldCheck, Layers, Repeat, Cpu, Atom
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';
import { techStack, techStackCategories } from '../data/portfolioData';

const iconMap = {
  Atom: Atom,
  Code2: Code2,
  FileCode2: FileCode2,
  Globe: Globe,
  Palette: Palette,
  Sparkles: Sparkles,
  LayoutGrid: LayoutGrid,
  Smartphone: Smartphone,
  Zap: Zap,
  Coffee: Coffee,
  Server: Server,
  ArrowRightLeft: ArrowRightLeft,
  KeyRound: KeyRound,
  FileJson: FileJson,
  Database: Database,
  Flame: Flame,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Figma: FigmaIcon,
  Send: Send,
  Terminal: Terminal,
  Code: Code,
  Megaphone: Megaphone,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Repeat: Repeat,
  Cpu: Cpu
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = activeCategory === 'all'
    ? techStack
    : techStack.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tools and technologies I use to build modern digital products.
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-3">
            A comprehensive overview of my technical capabilities across web frontend, cross-platform mobile, APIs, and development tooling.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {techStackCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const IconComponent = iconMap[tech.iconName] || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={tech.name}
                  className="group p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200 flex flex-col items-center text-center cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-indigo-50 text-slate-700 group-hover:text-indigo-600 flex items-center justify-center mb-3 transition-colors duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-slate-400 capitalize px-2 py-0.5 rounded-md bg-slate-100">
                    {tech.category}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
