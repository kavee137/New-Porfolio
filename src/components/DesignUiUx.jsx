import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Layout, Sparkles, CheckCircle2, Eye, MousePointer2 } from 'lucide-react';
import { FigmaIcon } from './Icons';
import { uiuxDesignTokens } from '../data/portfolioData';

export default function DesignUiUx() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Description & Figma Tools */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-4 w-fit border border-violet-100">
              <FigmaIcon className="w-3.5 h-3.5" />
              <span>Design + Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {uiuxDesignTokens.title}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {uiuxDesignTokens.subtitle}
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Having a design-aware mindset allows me to bridge the gap between design concepts and front-end engineering. I pay close attention to typography scale, spacing consistency, component reusability, and accessible contrast ratios.
            </p>

            {/* Design Tool Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {uiuxDesignTokens.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-xl bg-violet-50 text-violet-800 font-bold text-xs border border-violet-200/80 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                  {tool}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Figma-Inspired Visual Canvas Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-7 shadow-2xl border border-slate-800 relative overflow-hidden font-mono text-xs">
              
              {/* Figma Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <FigmaIcon className="w-4 h-4 text-violet-400" />
                  <span>Kaveesha_Design_System.fig</span>
                </div>
                <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/20">
                  100% Zoom
                </span>
              </div>

              {/* Figma Toolbar Simulation */}
              <div className="grid grid-cols-12 gap-3 mb-5">
                {/* Layer Tree */}
                <div className="col-span-4 bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-bold flex items-center gap-1">
                    <Layers className="w-3 h-3 text-violet-400" /> Layers
                  </div>
                  <div className="pl-1 text-slate-300 space-y-1.5 text-[10px]">
                    <div className="text-violet-300 font-bold">❖ App Canvas</div>
                    <div className="pl-2 text-slate-400">↳ Navbar Frame</div>
                    <div className="pl-2 text-slate-400">↳ Hero Section</div>
                    <div className="pl-2 text-slate-400">↳ Project Cards</div>
                  </div>
                </div>

                {/* Canvas Canvas Preview */}
                <div className="col-span-8 bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col justify-between relative bg-grid-pattern">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                    <span>Frame: Mobile Dashboard</span>
                    <span className="text-violet-400">Auto-Layout</span>
                  </div>

                  {/* Simulated Design Element */}
                  <div className="p-3 rounded-lg bg-indigo-600/20 border border-indigo-500/50 space-y-2 my-2">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-16 bg-indigo-400 rounded"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded"></div>
                    <div className="h-6 w-full bg-indigo-600 rounded flex items-center justify-center text-[9px] font-bold text-white">
                      Primary Button State
                    </div>
                  </div>

                  {/* Cursor Indicator */}
                  <div className="flex items-center gap-1 text-[10px] text-violet-300">
                    <MousePointer2 className="w-3.5 h-3.5 text-violet-400 fill-violet-400" />
                    <span>Kaveesha (Editing...)</span>
                  </div>
                </div>
              </div>

              {/* Color Palette Tokens Preview */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">Design Tokens:</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-indigo-600"></div>
                    <span className="text-slate-400">#4F46E5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-700"></div>
                    <span className="text-slate-400">#0F172A</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-50 border border-slate-400"></div>
                    <span className="text-slate-400">#F8FAFC</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
