import { Code2, Server, Wrench, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Systems',
      description: 'Building large-scale systems for critical infrastructure and public health platforms',
    },
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'RESTful APIs, microservices, and maintainable code',
    },
    {
      icon: Wrench,
      title: 'DevOps Practices',
      description: 'CI/CD pipelines, Docker, Jenkins, and cloud deployment',
    },
    {
      icon: TrendingUp,
      title: 'Performance Focus',
      description: 'Optimizing systems for scalability and reliability',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-3 space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a Java Software Engineer with extensive experience building
              enterprise-grade backend systems that power critical infrastructure.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My expertise lies in designing and implementing scalable microservices
              architectures using Spring Boot, REST APIs, and modern DevOps practices.
              I've worked on national-scale health and government platforms, enterprise
              systems where reliability and performance are paramount. I have a strong
              experience modernizing legacy systems, optimizing performance, and ensuring
              software quality.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm passionate about delivering software that makes a real-world impact.
            </p>
          </Reveal>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={(index % 2) * 80}>
                  <div className="card p-5 h-full hover:-translate-y-1">
                    <Icon className="text-accent-500 mb-3" size={26} />
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
