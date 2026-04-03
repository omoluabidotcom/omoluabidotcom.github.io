import { Github, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <div className="absolute top-20 left-10 w-72 h-72 bg-space-gray-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-space-gray-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-space-gray-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-space-gray-100 dark:bg-space-gray-800 text-space-gray-700 dark:text-space-gray-200 rounded-full text-sm font-medium mb-8 animate-fade-in border border-space-gray-200 dark:border-space-gray-700">
          <Code2 size={16} />
          <span>Available for new opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 animate-fade-in-up">
          Yahaya Yusuf
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-space-gray-700 dark:text-space-gray-300 mb-4 animate-fade-in-up animation-delay-200">
          Java Developer | Spring Boot | Microservices Architecture
        </p>

        <p className="text-lg sm:text-xl text-space-gray-600 dark:text-space-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          Building scalable backend systems with clean architecture and production-grade software engineering practices
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-space-gray-800 dark:hover:bg-space-gray-100 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="View my projects"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-space-gray-200 dark:bg-space-gray-800 hover:bg-space-gray-300 dark:hover:bg-space-gray-700 text-black dark:text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-space-gray-300 dark:border-space-gray-700"
            aria-label="Contact me"
          >
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/omoluabidotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-space-gray-700 dark:text-space-gray-300 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
            aria-label="Visit my GitHub profile"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yahaya-yusuf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-space-gray-700 dark:text-space-gray-300 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:yyahaya222@yahoo.com"
            className="text-space-gray-700 dark:text-space-gray-300 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
            aria-label="Send me an email"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
