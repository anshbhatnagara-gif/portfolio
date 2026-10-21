import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData, personalInfo } from '../data/portfolio';
import bgGreen from '../assets/bg-green.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'fallback'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status !== 'idle') setStatus('idle');
  };

  const triggerEmailFallback = (name, email, message) => {
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    // Open Gmail compose directly in a new tab with prefilled content
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // When EmailJS env keys are missing, use the prefilled Gmail compose fallback
    if (!serviceId || !templateId || !publicKey) {
      setStatus('fallback');
      triggerEmailFallback(formData.name, formData.email, formData.message);
      return;
    }

    // Otherwise send via EmailJS
    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.warn('EmailJS delivery failed, falling back to Gmail compose:', error);
      setStatus('fallback');
      triggerEmailFallback(formData.name, formData.email, formData.message);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background: bg-green.jpg (fixed, covered, centered) with dark overlay & subtle blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgGreen})` }}
      />
      <div className="absolute inset-0 bg-[#05080f]/85 backdrop-blur-[2px]" />

      {/* Top Gradient Fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05080f] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-card border border-[#22ff88]/30 text-xs font-mono font-semibold text-[#22ff88] mb-3 tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {contactData.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22ff88] to-[#00e5ff] rounded-full mt-4 shadow-[0_0_12px_rgba(34,255,136,0.6)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Actions & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-base text-slate-300 leading-relaxed font-sans">
              {contactData.text}
            </p>

            {/* Email on Gmail Primary Action */}
            <div className="pt-2">
              <a
                href={contactData.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold neon-btn-green font-mono"
              >
                <Mail className="w-4 h-4 text-[#05080f]" />
                <span>Email me on Gmail</span>
                <ExternalLink className="w-4 h-4 text-[#05080f]" />
              </a>

              <div className="mt-2 text-center">
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-xs text-slate-400 hover:text-[#22ff88] transition-colors font-mono underline underline-offset-4"
                >
                  Or open in default mail app
                </a>
              </div>
            </div>

            {/* Email Address with Copy-to-Clipboard */}
            <div className="cyber-card p-4 rounded-xl flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[#22ff88]/10 border border-[#22ff88]/25 flex items-center justify-center text-[#22ff88] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white font-mono truncate">
                    {contactData.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#22ff88]/20 border border-white/10 hover:border-[#22ff88]/40 text-slate-300 hover:text-[#22ff88] transition-all shrink-0 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#22ff88]" />
                    <span className="text-[#22ff88]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="cyber-card p-4 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/25 flex items-center justify-center text-[#00e5ff] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  Stationed At
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  {contactData.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-mono text-[#22ff88] uppercase tracking-wider mb-3">
                &gt; Network Nodes
              </div>
              <div className="flex gap-3">
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl cyber-card text-xs sm:text-sm font-mono text-slate-300 hover:text-[#22ff88]"
                >
                  <Github className="w-4 h-4 text-[#22ff88]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl cyber-card text-xs sm:text-sm font-mono text-slate-300 hover:text-[#00e5ff]"
                >
                  <Linkedin className="w-4 h-4 text-[#00e5ff]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="cyber-card p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#22ff88]/20">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
                <h3 className="text-xl font-bold text-white font-mono">
                  Send Transmission
                </h3>
                <span className="text-xs font-mono text-[#22ff88]">
                  SECURE_FORM
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ansh Bhatnagar"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#05080f]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#22ff88] focus:ring-1 focus:ring-[#22ff88] transition-colors text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Sender Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="anshbhatnagara@gmail.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#05080f]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#22ff88] focus:ring-1 focus:ring-[#22ff88] transition-colors text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Message Payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#05080f]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#22ff88] focus:ring-1 focus:ring-[#22ff88] transition-colors text-sm font-sans resize-none"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#22ff88]/10 border border-[#22ff88]/30 text-[#22ff88] text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Transmission sent successfully via EmailJS!</span>
                  </div>
                )}

                {status === 'fallback' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Opening Gmail compose in new tab with your prefilled payload...</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold neon-btn-green font-mono cursor-pointer disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#05080f]" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#05080f]" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
