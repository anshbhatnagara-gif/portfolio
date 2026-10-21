import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo, footerData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-heading font-bold text-xs shadow-md shadow-blue-600/30">
              {personalInfo.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">
                {footerData.copyright}
              </p>
              <p className="text-xs text-slate-500">
                {footerData.tagline}
              </p>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl card-glass text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl card-glass text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl card-glass text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
