import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { SOCIAL, SITE } from '../config';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-canvas-light dark:bg-canvas-dark"
    >
      {/* Dotted-grid backdrop */}
      <div
        className="absolute inset-0 grid-backdrop text-slate-300 dark:text-white/10 pointer-events-none"
        aria-hidden="true"
      />
      {/* Accent glow */}
      <div
        className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-accent-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-24 w-[28rem] h-[28rem] rounded-full bg-teal-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-700 dark:text-accent-300 text-sm font-mono mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            Available for new opportunities
          </div>

          <p className="eyebrow mb-4 animate-fade-in">Hi, I'm</p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in">
            {SITE.name}
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-slate-700 dark:text-slate-200 mb-6 animate-fade-in">
            {SITE.role}
            <span className="text-accent-500">.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 animate-fade-in">
            I build scalable backend systems with clean architecture and
            production-grade engineering practices —{' '}
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              {SITE.tagline}
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5"
            >
              <Sparkles size={18} />
              Get in Touch
            </button>
          </div>

          <div className="flex items-center gap-5 animate-fade-in">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all hover:-translate-y-0.5"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all hover:-translate-y-0.5"
              aria-label="Send an email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
