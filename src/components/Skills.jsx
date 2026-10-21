import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Globe, Wrench, BookOpen, Compass } from 'lucide-react';
import { skillsData } from '../data/portfolio';
import bgBlue from '../assets/bg-blue.jpg';

export default function Skills() {
  const categoryIcons = {
    "Programming Languages": Terminal,
    "Web Development": Globe,
    "Tools": Wrench,
    "Currently Learning": BookOpen,
    "Exploring": Compass,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background: bg-blue.jpg (fixed, covered, centered) with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgBlue})` }}
      />
      <div className="absolute inset-0 bg-[#05080f]/85 backdrop-blur-[2px]" />

      {/* Top and Bottom Fades */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#05080f] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#05080f] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-card border border-[#22ff88]/30 text-xs font-mono font-semibold text-[#22ff88] mb-3 tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECH_ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Skills & <span className="neon-gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base font-mono">
            Languages, frameworks, and domains actively configured in my developer stack.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22ff88] to-[#00e5ff] rounded-full mt-4 shadow-[0_0_12px_rgba(34,255,136,0.6)]" />
        </div>

        {/* Grouped Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Cpu;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="cyber-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-[#22ff88]/10 border border-[#22ff88]/25 flex items-center justify-center text-[#22ff88] group-hover:scale-105 group-hover:bg-[#22ff88]/20 transition-all shadow-[0_0_15px_rgba(34,255,136,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#22ff88] transition-colors font-mono">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-[#05080f]/90 text-slate-300 border border-[#22ff88]/20 hover:border-[#22ff88] hover:text-[#22ff88] hover:shadow-[0_0_12px_rgba(34,255,136,0.3)] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
