import { ExternalLink, Github, Code, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Job Application Platform Backend',
      problem: 'Built a comprehensive recruitment platform connecting job seekers with employers, featuring role-based access control and payment processing',
      techStack: ['Spring Boot', 'Hibernate', 'REST APIs', 'PostgreSQL', 'Paystack'],
      contributions: [
        'Developed admin dashboard APIs with role-based access control',
        'Created analytics microservice for recruiters and job seekers',
        'Integrated Paystack payment gateway for premium features',
        'Designed scalable database schema for multi-tenant architecture'
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Code
    },
    {
      title: 'Automated Chatbot Deployment',
      problem: 'Implemented fully automated CI/CD pipeline for rapid deployment of Java-based chatbot applications with zero-downtime releases',
      techStack: ['Jenkins', 'Docker', 'Maven', 'Java'],
      contributions: [
        'Built end-to-end CI/CD pipeline with automated testing',
        'Containerized Java application using Docker',
        'Improved delivery speed by 50% through automation',
        'Implemented automated rollback mechanisms for failed deployments'
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Zap
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Personal Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Problem Statement
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.contributions.map((contribution, contribIndex) => (
                          <li
                            key={contribIndex}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
