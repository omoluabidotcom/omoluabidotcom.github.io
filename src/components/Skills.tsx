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
      skills: ['Spring', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JUnit']
    },
    {
      icon: Globe,
      title: 'Architecture',
      skills: ['RESTful APIs', 'Microservices', 'Role-Based Access Control']
    },
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React.js', 'Vaadin', 'JSP']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Jenkins', 'Maven', 'Git', 'AWS (EC2, VPC, IAM, S3)', 'Linode']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
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
