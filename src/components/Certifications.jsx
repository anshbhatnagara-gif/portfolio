import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { certificationsData } from '../data/portfolio';
import bgBlue from '../assets/bg-blue.jpg';

export default function Certifications() {
  const hasCertifications = certificationsData && certificationsData.length > 0;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background: bg-blue.jpg (fixed, covered, centered) with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgBlue})` }}
      />
      <div className="absolute inset-0 bg-[#05080f]/85 backdrop-blur-[2px]" />

      {/* Top and Bottom Fades - Smooth gradient transition towards Contact (green) */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#05080f] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#05080f]/80 to-[#05080f] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-card border border-[#00e5ff]/30 text-xs font-mono font-semibold text-[#00e5ff] mb-3 tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>06 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Licenses & <span className="neon-gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base font-mono">
            Verified technical credentials and course completions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-[#22ff88] rounded-full mt-4 shadow-[0_0_12px_rgba(0,229,255,0.6)]" />
        </div>

        {/* Content: Cards if present, else friendly coming soon card */}
        {hasCertifications ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="cyber-card-cyan p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    {cert.year && (
                      <span className="text-xs font-mono text-[#22ff88]">
                        {cert.year}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors font-mono">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cert.link && (
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#00e5ff] hover:text-[#22ff88] transition-colors font-mono"
                    >
                      <span>[VERIFY_CREDENTIAL]</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          /* Friendly Coming Soon Card in Hacker Style */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="cyber-card-cyan p-8 sm:p-10 rounded-2xl text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-4 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">
                Certifications Coming Soon
              </h3>
              <p className="text-sm text-slate-300 max-w-md leading-relaxed font-sans">
                Currently undertaking specialized coursework in full-stack web development, AI/ML foundations, and cybersecurity. Verified certificates will appear here upon completion.
              </p>
              <div className="mt-4 px-3 py-1 rounded-full bg-[#22ff88]/10 border border-[#22ff88]/30 text-xs font-mono text-[#22ff88]">
                STATUS: IN_PROGRESS // ACTIVE_STUDY
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
