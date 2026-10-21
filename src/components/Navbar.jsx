import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-code ${
        scrolled ? 'cyber-nav py-3.5 shadow-xl shadow-black/60' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Initials "AB" in Hacker Style */}
          <a
            href="#hero"
            aria-label="Back to Top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22ff88] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-[#22ff88]/40 flex items-center justify-center text-[#22ff88] font-bold text-lg shadow-[0_0_15px_rgba(34,255,136,0.25)] group-hover:border-[#22ff88] group-hover:shadow-[0_0_20px_rgba(34,255,136,0.5)] transition-all">
              {personalInfo.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#22ff88] transition-colors flex items-center gap-1.5">
                <span className="text-[#22ff88] text-xs">&gt;</span>
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono">
                [PORTFOLIO_V2.0]
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full cyber-card border border-white/5 px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#22ff88] hover:bg-[#22ff88]/10 rounded-full transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#22ff88]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold neon-btn-green"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2.5 rounded-xl cyber-card text-slate-300 hover:text-[#22ff88] focus:outline-none focus:ring-1 focus:ring-[#22ff88] transition-colors"
          >
            {isOpen ? <X className="w-5 h-5 text-[#22ff88]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden cyber-nav border-b border-[#22ff88]/20 px-4 pt-3 pb-6 mt-2 space-y-2 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#22ff88] hover:bg-[#22ff88]/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#22ff88]/50 text-xs">#</span>
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 text-center py-2.5 px-4 rounded-xl text-sm font-semibold neon-btn-green"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
