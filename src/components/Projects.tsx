import { ExternalLink, Github, Code, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'City Water Billing System',
      problem: 'Architected and developed a full-stack Java billing engine handling consumption metering, tariff calculations, and payment reconciliation in a production-ready system with mobile-first access and integrated payment processing',
      techStack: ['Spring Boot', 'Jakarta EE', 'Vaadin', 'PostgreSQL', 'USSD', 'Payment Integration'],
      contributions: [
        'Implemented core business logic for consumption metering, tariff calculations, and payment reconciliation',
        'Built server-side UI framework using Vaadin for responsive customer management and billing operations',
        'Designed and implemented USSD customer interface for mobile-first access across feature phones and diverse connectivity scenarios',
        'Integrated payment gateway systems enabling secure online processing and automated reconciliation with multiple payment methods'
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Code
    },
    {
      title: 'Chatbot Application with LLM Integration',
      problem: 'Built an intelligent chatbot application integrating LLM APIs with automated CI/CD pipeline for consistent, zero-manual-intervention deployments',
      techStack: ['Spring AI', 'Docker', 'Jenkins', 'Maven', 'Java', 'LLM APIs'],
      contributions: [
        'Integrated LLM APIs using SpringAI to streamline application interaction with language models',
        'Containerized application with Docker, improving deployment consistency and eliminating environment-related failures',
        'Implemented full CI/CD pipeline using Jenkins and Docker for automated build, test, and deployment',
        'Enabled zero-manual-intervention releases with automated rollback capabilities'
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Zap
    }
  ];

  return (
    <section id="projects" className="py-20 bg-space-gray-50 dark:bg-space-gray-950 border-b border-space-gray-200 dark:border-space-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">
          Personal Projects
        </h2>
        <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={index}
                className="bg-white dark:bg-space-gray-900 rounded-lg border border-space-gray-200 dark:border-space-gray-800 overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg">
                      <Icon className="text-black dark:text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-space-gray-600 dark:text-space-gray-400 uppercase tracking-wide mb-2">
                        Problem Statement
                      </h4>
                      <p className="text-space-gray-700 dark:text-space-gray-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-space-gray-600 dark:text-space-gray-400 uppercase tracking-wide mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-space-gray-100 dark:bg-space-gray-800 text-space-gray-700 dark:text-space-gray-300 rounded-full text-sm border border-space-gray-200 dark:border-space-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-space-gray-600 dark:text-space-gray-400 uppercase tracking-wide mb-2">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.contributions.map((contribution, contribIndex) => (
                          <li
                            key={contribIndex}
                            className="flex items-start gap-2 text-space-gray-700 dark:text-space-gray-300"
                          >
                            <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-space-gray-50 dark:bg-space-gray-800/50 border-t border-space-gray-200 dark:border-space-gray-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black dark:text-white hover:text-space-gray-700 dark:hover:text-space-gray-300 font-semibold transition-colors group"
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
