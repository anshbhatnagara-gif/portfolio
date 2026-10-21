import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formal <span className="gradient-accent-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-glass card-glass-hover p-8 sm:p-10 rounded-2xl border border-white/5 relative overflow-hidden group shadow-xl"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-medium text-slate-300 mt-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.status}
                  </span>
                </div>
              </div>

              {edu.description && (
                <p className="text-sm text-slate-400 leading-relaxed mt-4 pt-4 border-t border-white/5">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
