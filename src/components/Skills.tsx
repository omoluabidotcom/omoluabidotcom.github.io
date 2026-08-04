import { Code, Layers, Globe, Database, Cloud } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'SQL'],
    },
    {
      icon: Layers,
      title: 'Frameworks',
      skills: ['Spring Boot', 'Spring MVC', 'Spring AI', 'J2EE', 'Jakarta EE', 'Hibernate', 'JUnit', 'Vaadin', 'JSP', 'React.js'],
    },
    {
      icon: Globe,
      title: 'Architecture',
      skills: ['RESTful APIs', 'Microservices', 'Role-Based Access Control'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Microsoft SQL'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Technologies',
      skills: ['Jenkins', 'Maven', 'Git', 'Docker', 'Linode', 'Ubuntu', 'Apache Tomcat', 'Payara Server'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-canvas-light dark:bg-canvas-dark">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="02" title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 80}>
                <div className="card p-6 h-full hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-accent-500/10">
                      <Icon className="text-accent-500" size={22} />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-md text-sm font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
