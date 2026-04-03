import { Code, Layers, Globe, Database, Cloud, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Java', 'JavaScript']
    },
    {
      icon: Layers,
      title: 'Frameworks',
      skills: ['Spring Boot', 'Spring MVC', 'Spring AI', 'J2EE', 'Jakarta EE', 'Hibernate', 'JUnit', 'Vaadin', 'JSP', 'React.js']
    },
    {
      icon: Globe,
      title: 'Architecture',
      skills: ['RESTful APIs', 'Microservices', 'Role-Based Access Control', 'System Design']
    },
    {
      icon: Code,
      title: 'Cloud Technologies',
      skills: ['AWS (VPC, EC2, S3)', 'Linode', 'Docker', 'Ubuntu', 'Apache Tomcat']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Microsoft SQL']
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD',
      skills: ['Jenkins', 'Maven', 'Git', 'Docker', 'GitHub Copilot', 'Cursor']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-space-gray-50 dark:bg-space-gray-950 border-b border-space-gray-200 dark:border-space-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-space-gray-900 p-6 rounded-lg border border-space-gray-200 dark:border-space-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg">
                    <Icon className="text-black dark:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-space-gray-700 dark:text-space-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
