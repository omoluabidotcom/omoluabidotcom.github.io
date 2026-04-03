import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />

        <footer className="bg-white dark:bg-black border-t border-space-gray-200 dark:border-space-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-space-gray-600 dark:text-space-gray-400">
            <p>&copy; {new Date().getFullYear()} Yahaya Yusuf. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
