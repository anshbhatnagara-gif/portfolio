import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, footerData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#22ff88]/15 py-12 bg-[#04060b] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright & Background Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-[#22ff88]/40 flex items-center justify-center text-[#22ff88] font-bold text-xs shadow-[0_0_12px_rgba(34,255,136,0.3)] font-mono">
              {personalInfo.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200 font-mono">
                {footerData.copyright}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {footerData.credit}
              </p>
            </div>
          </div>

          {/* Social Icons: GitHub, LinkedIn, Gmail + Back to Top */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl cyber-card text-slate-400 hover:text-[#22ff88] hover:border-[#22ff88]/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl cyber-card text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Gmail */}
            <a
              href={personalInfo.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email on Gmail"
              className="p-2.5 rounded-xl cyber-card text-slate-400 hover:text-[#22ff88] hover:border-[#22ff88]/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl cyber-card text-slate-400 hover:text-[#22ff88] hover:border-[#22ff88]/50 transition-colors cursor-pointer ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
