import { Github, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Code2 size={16} />
          <span>Available for new opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
          Yahaya Yusuf
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 animate-fade-in-up animation-delay-200">
          Java Software Engineer | Spring Boot | Microservices Architecture
        </p>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          Building scalable systems with clean architecture and production-grade software engineering practices
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="View my projects"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            aria-label="Visit my GitHub profile"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yahaya-yusuf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:yyahaya222@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            aria-label="Send me an email"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
