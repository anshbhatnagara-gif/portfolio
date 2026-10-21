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
    <section id="journey" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="gradient-accent-text">Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Milestones in continuous learning, problem solving, and technological expansion.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central guide line (hidden on mobile, visible on sm+) */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent -translate-x-1/2 opacity-30" />

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
                    <div className="card-glass card-glass-hover p-6 sm:p-7 rounded-2xl border border-white/5 relative group">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {item.phase}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 shadow-lg shadow-blue-500/40 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  </div>

                  {/* Symmetrical Spacer for layout */}
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
