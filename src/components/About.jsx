import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, Rocket, Sparkles } from 'lucide-react';
import { aboutData } from '../data/portfolio';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Code: Code,
    Rocket: Rocket,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & <span className="gradient-accent-text">Philosophy</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="card-glass p-8 sm:p-10 rounded-2xl border border-white/5 shadow-xl">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {aboutData.bio}
            </p>
          </div>
        </motion.div>

        {/* Four Small Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {aboutData.cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Sparkles;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="card-glass card-glass-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {card.description}
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
