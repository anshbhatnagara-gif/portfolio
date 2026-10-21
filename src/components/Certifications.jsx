import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolio';

export default function Certifications() {
  const hasCertifications = certificationsData && certificationsData.length > 0;

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Licenses & <span className="gradient-accent-text">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Professional certifications and courses validating industry-relevant skills.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Content: Cards if present, else friendly placeholder */}
        {hasCertifications ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="card-glass card-glass-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    {cert.year && (
                      <span className="text-xs font-mono text-slate-400">
                        {cert.year}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
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
                      className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          /* Friendly Coming Soon Card */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card-glass p-8 sm:p-10 rounded-2xl border border-white/5 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Certifications Coming Soon
              </h3>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Currently preparing and undertaking targeted courses in full-stack web development, AI/ML foundations, and cybersecurity. Verified certificates will be showcased here upon completion.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
