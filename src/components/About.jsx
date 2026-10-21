import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, Rocket, Sparkles, Terminal } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolio';
import bgBlue from '../assets/bg-blue.jpg';

export default function About() {
  const [imageError, setImageError] = useState(false);

  const iconMap = {
    GraduationCap: GraduationCap,
    Code: Code,
    Rocket: Rocket,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background: bg-blue.jpg with fixed position, dark overlay & subtle blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgBlue})` }}
      />
      <div className="absolute inset-0 bg-[#05080f]/85 backdrop-blur-[2px]" />

      {/* Top and Bottom Fades for smooth section transitions */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05080f] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05080f] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-card border border-[#00e5ff]/30 text-xs font-mono font-semibold text-[#00e5ff] mb-3 tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT_ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Background & <span className="neon-gradient-text">Philosophy</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22ff88] via-[#00e5ff] to-purple-500 rounded-full mt-4 shadow-[0_0_12px_rgba(34,255,136,0.6)]" />
        </div>

        {/* Bio & Profile Photo Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          {/* Circular Profile Photo in About Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Cyan to Green Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00e5ff] via-[#22ff88] to-purple-600 rounded-full blur-md opacity-60 group-hover:opacity-90 transition duration-300"></div>

              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#00e5ff] to-[#22ff88] shadow-[0_0_25px_rgba(0,229,255,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#05080f] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt="Ansh Bhatnagar"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#061524] to-[#0a1f18] flex flex-col items-center justify-center p-4 text-center select-none">
                      <span className="font-heading font-bold text-4xl text-[#00e5ff] text-glow-cyan">
                        {personalInfo.initials}
                      </span>
                      <span className="text-[10px] text-[#22ff88] font-mono mt-1 tracking-wider uppercase">
                        AB_DEV
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="cyber-card-cyan p-7 sm:p-9 rounded-2xl border border-[#00e5ff]/20 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00e5ff] mb-4 pb-2 border-b border-white/5">
                <Terminal className="w-4 h-4" />
                <span>root@ansh:~/about_me.txt</span>
              </div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {aboutData.bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Four Info Cards */}
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
                className="cyber-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#22ff88]/10 border border-[#22ff88]/25 flex items-center justify-center text-[#22ff88] mb-4 group-hover:scale-105 group-hover:bg-[#22ff88]/20 transition-all shadow-[0_0_15px_rgba(34,255,136,0.15)]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#22ff88] transition-colors font-mono">
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
