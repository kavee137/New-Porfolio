import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Check } from 'lucide-react';

export default function WebMobileShowcase() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3 border border-indigo-500/30">
            <span>Dual Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web & Mobile Frontend Specialization
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Delivering seamless user experiences across web browsers and native mobile devices with clean architecture.
          </p>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* 2 Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 1. Web Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  WEB PLATFORM
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Web Frontend Development
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Building responsive and scalable web interfaces with modern React technologies, modular CSS/Tailwind architectures, and reliable API clients.
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Technologies & Tools:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'REST APIs'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/20 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-indigo-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Browser Mockup Visual */}
            <div className="rounded-xl bg-slate-900 border border-slate-700/80 p-3 shadow-inner font-mono text-xs text-slate-400">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <div className="px-3 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                  https://kaveesha-portfolio.web.app
                </div>
                <div className="w-8"></div>
              </div>
              <div className="space-y-2 p-2 bg-slate-950/60 rounded-lg">
                <div className="h-3 w-1/3 bg-indigo-500/40 rounded"></div>
                <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
                <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-10 bg-indigo-600/20 rounded border border-indigo-500/30"></div>
                  <div className="h-10 bg-indigo-600/20 rounded border border-indigo-500/30"></div>
                  <div className="h-10 bg-indigo-600/20 rounded border border-indigo-500/30"></div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* 2. Mobile Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  MOBILE PLATFORM
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Mobile Frontend Development
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Building cross-platform mobile applications with beautiful, touch-optimized interfaces using React Native, Expo toolchain, and Google AdMob monetization.
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Technologies & Tools:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Expo', 'Firebase', 'REST APIs', 'AdMob'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-blue-300 font-mono text-xs font-semibold border border-blue-500/20 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Smartphone Mockup Visual */}
            <div className="rounded-xl bg-slate-900 border border-slate-700/80 p-3 shadow-inner font-mono text-xs text-slate-400">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                <div className="text-[10px] text-blue-400">iOS & Android Build</div>
                <div className="w-12 h-1.5 rounded-full bg-slate-700 mx-auto"></div>
                <div className="text-[10px] text-emerald-400">● Expo SDK 51</div>
              </div>
              <div className="space-y-2 p-2 bg-slate-950/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 bg-blue-500/40 rounded"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500/40"></div>
                </div>
                <div className="h-16 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-lg border border-blue-500/30 flex items-center justify-center">
                  <span className="text-[10px] text-blue-200">Native UI Component</span>
                </div>
                <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
