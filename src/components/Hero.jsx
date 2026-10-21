import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import CyberMatrixCanvas from './CyberMatrixCanvas';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  // Typing animation states
  const roles = personalInfo.typingRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image: bg-green.jpg (fixed, covered, centered) with dark overlay & slight blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/src/assets/bg-green.jpg')` }}
      />
      {/* Dark Overlay (rgba(5,8,15,0.80)) + blur to protect readability */}
      <div className="absolute inset-0 bg-[#05080f]/85 backdrop-blur-[2px]" />

      {/* Cyberpunk Matrix-Style Canvas Animation */}
      <CyberMatrixCanvas />

      {/* Radial Neon Green Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#22ff88]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00e5ff]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Terminal Header, Name, Typing Animation, Intro, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill in Cyber Terminal Style */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-card border border-[#22ff88]/30 text-xs sm:text-sm font-mono text-[#22ff88]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22ff88]"></span>
              </span>
              <span>SYSTEM.ONLINE // CSE STUDENT</span>
              <Terminal className="w-3.5 h-3.5 text-[#22ff88]" />
            </div>

            {/* Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono text-[#22ff88] tracking-widest uppercase mb-1">
                &lt;coder_identity&gt;
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight font-heading">
                {personalInfo.name}
              </h1>
            </div>

            {/* Dynamic Typing Title */}
            <div className="text-lg sm:text-2xl font-mono text-slate-200 flex items-center justify-center lg:justify-start gap-1 h-8 sm:h-10">
              <span className="text-[#00e5ff] font-semibold">&gt;</span>
              <span className="text-glow-green text-[#22ff88] font-bold">
                {currentText}
              </span>
              <span className="inline-block w-2 h-6 bg-[#22ff88] animate-pulse ml-0.5" />
            </div>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              {personalInfo.intro}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 font-mono">
              {/* Download Resume */}
              <a
                href={personalInfo.resumeUrl}
                download="Ansh_Bhatnagar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold neon-btn-green"
              >
                <Download className="w-4 h-4 text-[#05080f]" />
                <span>Download Resume</span>
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-200 cyber-card neon-btn-outline hover:text-[#22ff88]"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-[#22ff88]" />
              </a>

              {/* Quick Socials */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl cyber-card text-slate-300 hover:text-[#22ff88] hover:border-[#22ff88]/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl cyber-card text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-3 rounded-xl cyber-card text-slate-300 hover:text-[#22ff88] hover:border-[#22ff88]/50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Photo with neon gradient border & floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative group"
            >
              {/* Outer Neon Glow Aura (Green to Cyan) */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#22ff88] via-[#00e5ff] to-[#a855f7] rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

              {/* Glowing Frame Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#22ff88] via-[#00e5ff] to-purple-600 shadow-[0_0_35px_rgba(34,255,136,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#05080f] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt="Ansh Bhatnagar"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#09151f] via-[#05080f] to-[#120a1f] flex flex-col items-center justify-center p-6 text-center select-none">
                      <span className="font-heading font-extrabold text-5xl sm:text-6xl text-[#22ff88] text-glow-green">
                        {personalInfo.initials}
                      </span>
                      <span className="text-[11px] text-[#00e5ff] font-mono mt-2 tracking-widest uppercase">
                        [DEV_PROFILE]
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#05080f]/80 to-[#05080f] pointer-events-none" />
    </section>
  );
}
