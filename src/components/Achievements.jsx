import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Cpu, Zap, Terminal } from 'lucide-react';
import { achievementsData } from '../data/portfolio';

export default function Achievements() {
  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Cpu: Cpu,
    Zap: Zap,
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
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
            <Trophy className="w-3.5 h-3.5" />
            <span>05 // HONORS_AND_EVENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Key <span className="neon-gradient-text">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base font-mono">
            Hackathons, engineering exhibitions, and academic milestones.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22ff88] to-[#00e5ff] rounded-full mt-4 shadow-[0_0_12px_rgba(34,255,136,0.6)]" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-white/5">
                    <div className="w-11 h-11 rounded-xl bg-[#22ff88]/10 border border-[#22ff88]/25 flex items-center justify-center text-[#22ff88] group-hover:scale-105 group-hover:bg-[#22ff88]/20 transition-all shadow-[0_0_15px_rgba(34,255,136,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#22ff88]/10 text-[#22ff88] border border-[#22ff88]/30 shadow-[0_0_10px_rgba(34,255,136,0.2)]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#22ff88] transition-colors font-mono">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-[#00e5ff] mt-1 font-mono">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
