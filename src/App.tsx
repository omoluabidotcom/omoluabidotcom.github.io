import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import WorkProjects from './components/WorkProjects';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <header>
          <Hero />
        </header>

        <main>
          <About />
          <Skills />
          <Experience />
          <WorkProjects />
          <Projects />
          <Education />
          <Contact />
        </main>

        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Yahaya Yusuf. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
