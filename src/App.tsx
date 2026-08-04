import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import WorkProjects from './components/WorkProjects';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import { SITE } from './config';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark transition-colors duration-300">
      <Nav isDark={isDark} onToggleTheme={toggle} />

      <header>
        <Hero />
      </header>

      <main>
        <About />
        <Skills />
        <Experience />
        <WorkProjects />
        <Projects />
        <Blog />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10 py-10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p className="font-mono">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="font-mono text-xs">
            Built with React · TypeScript · Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
