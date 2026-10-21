import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Globe, Wrench, BookOpen, Compass } from 'lucide-react';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const categoryIcons = {
    "Programming Languages": Terminal,
    "Web Development": Globe,
    "Tools": Wrench,
    "Currently Learning": BookOpen,
    "Exploring": Compass,
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-accent-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Languages, development tools, and domains I actively work with and explore.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
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
                className="card-glass card-glass-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/80 text-slate-300 border border-white/5 hover:border-blue-500/40 hover:text-white transition-all shadow-sm"
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
