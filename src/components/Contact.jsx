import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'fallback'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status !== 'idle') setStatus('idle');
  };

  const openMailtoFallback = (name, email, message) => {
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS env keys are missing, fallback to prefilled mailto immediately
    if (!serviceId || !templateId || !publicKey) {
      setStatus('fallback');
      openMailtoFallback(formData.name, formData.email, formData.message);
      return;
    }

    // Attempt to send via EmailJS
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
      console.warn('EmailJS delivery failed, triggering mailto fallback:', error);
      setStatus('fallback');
      openMailtoFallback(formData.name, formData.email, formData.message);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contactData.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Info & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-base text-slate-300 leading-relaxed">
              {contactData.text}
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card (mailto) */}
              <a
                href={`mailto:${contactData.email}`}
                className="card-glass card-glass-hover p-4 rounded-xl border border-white/5 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                    Email
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {contactData.email}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="card-glass p-4 rounded-xl border border-white/5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {contactData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Connect On
              </div>
              <div className="flex gap-3">
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl card-glass card-glass-hover text-sm font-medium text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl card-glass card-glass-hover text-sm font-medium text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
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
            <div className="card-glass p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ansh Bhatnagar"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="anshbhatnagara@gmail.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Ansh, I'd like to talk about..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-rose-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message sent successfully! I will get back to you soon.</span>
                  </div>
                )}

                {status === 'fallback' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Opening your default email client with your prefilled message...</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
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
