import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Cpu, Zap } from 'lucide-react';
import { achievementsData } from '../data/portfolio';

export default function Achievements() {
  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Cpu: Cpu,
    Zap: Zap,
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Participation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-accent-text">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Hackathons, technical competitions, and academic recognitions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
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
                className="card-glass card-glass-hover p-6 sm:p-7 rounded-2xl border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
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
