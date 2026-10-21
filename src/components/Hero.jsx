import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs sm:text-sm font-medium text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Computer Science Engineering Student</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            </div>

            {/* Headline */}
            <div>
              <p className="text-sm sm:text-base font-mono text-slate-400 uppercase tracking-wider mb-2">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
            </div>

            {/* Tagline */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
              <span className="gradient-accent-text font-semibold">
                {personalInfo.tagline}
              </span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.intro}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Download Resume (graceful fallback if file is not found) */}
              <a
                href={personalInfo.resumeUrl}
                download="Ansh_Bhatnagar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-200 card-glass card-glass-hover border border-white/10 hover:text-white"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>

              {/* Quick Socials */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl card-glass text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl card-glass text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-3 rounded-xl card-glass text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Photo or Gradient Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group">
              {/* Outer decorative gradient aura ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Photo Frame Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/10 bg-[#0c1220] flex items-center justify-center shadow-2xl">
                {!imageError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900/60 via-slate-900 to-purple-950 flex flex-col items-center justify-center p-6 text-center select-none">
                    <span className="font-heading font-extrabold text-5xl sm:text-6xl text-white tracking-wider">
                      {personalInfo.initials}
                    </span>
                    <span className="text-xs text-blue-300/80 font-mono mt-2 tracking-widest uppercase">
                      Engineer
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
