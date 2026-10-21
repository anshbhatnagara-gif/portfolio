import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Layout, Server, Shield, Cpu } from 'lucide-react';
import { journeyData } from '../data/portfolio';

export default function Journey() {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Shield: Shield,
    Cpu: Cpu,
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background: bg-blue.jpg (fixed, covered, centered) with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/src/assets/bg-blue.jpg')` }}
      />
      <div className="absolute inset-0 bg-[#05080f]/85 backdrop-blur-[2px]" />

      {/* Top and Bottom Fades */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#05080f] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#05080f] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-card border border-[#22ff88]/30 text-xs font-mono font-semibold text-[#22ff88] mb-3 tracking-wider uppercase">
            <Milestone className="w-3.5 h-3.5" />
            <span>04 // PROGRESS_LOG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Developer <span className="neon-gradient-text">Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base font-mono">
            Chronological growth milestones in problem-solving and software engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22ff88] via-[#00e5ff] to-purple-500 rounded-full mt-4 shadow-[0_0_12px_rgba(34,255,136,0.6)]" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central neon line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22ff88] via-[#00e5ff] to-transparent -translate-x-1/2 opacity-40 shadow-[0_0_10px_rgba(34,255,136,0.5)]" />

          <div className="space-y-10 sm:space-y-12">
            {journeyData.map((item, idx) => {
              const Icon = iconMap[item.icon] || Milestone;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full sm:w-1/2">
                    <div className="cyber-card p-6 sm:p-7 rounded-2xl relative group">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#22ff88]/10 text-[#22ff88] border border-[#22ff88]/30 shadow-[0_0_10px_rgba(34,255,136,0.2)]">
                          {item.phase}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#22ff88]/10 border border-[#22ff88]/25 flex items-center justify-center text-[#22ff88] shadow-[0_0_10px_rgba(34,255,136,0.2)]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#22ff88] transition-colors mb-2 font-mono">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-[#05080f] border-2 border-[#22ff88] shadow-[0_0_15px_rgba(34,255,136,0.8)] z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
                  </div>

                  {/* Symmetrical Spacer */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
