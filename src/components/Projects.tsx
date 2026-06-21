import { ExternalLink, Github, Code, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'City Water Billing System - Interswitch Hackathon Project(2026)',
      problem: 'Architected and developed a full-stack Java billing engine handling consumption metering, tariff calculations, and payment reconciliation in a production-ready system with mobile-first access and integrated payment processing',
      techStack: ['Spring Boot', 'Jakarta EE', 'Vaadin', 'PostgreSQL', 'USSD', 'Payment Integration'],
      contributions: [
        'Implemented core business logic for consumption metering, tariff calculations, and payment reconciliation',
        'Built server-side UI framework using Vaadin for responsive customer management and billing operations',
        'Designed and implemented USSD customer interface for mobile-first access across feature phones and diverse connectivity scenarios',
        'Integrated Interswitch payment gateway systems for seamless online payments and real-time transaction processing',
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
    },
    {
      title: 'Published a Java Package',
      problem: 'Published a Java package to Sonatype for the Java frontend framework(Vaadin), enabling developers to easily collect phone numbers from users with built-in validation and formatting with country code support',
      techStack: ['Java', 'Maven', 'Vaadin', 'Junit'],
      contributions: [
        'Published a Java package to Sonatype for the Vaadin framework, enabling developers to easily collect phone numbers from users with built-in validation and formatting',
        'Implemented unit tests using Junit to ensure package reliability and functionality',
        'Configured Maven for seamless package deployment and version management',
        'Provided comprehensive documentation for developers to integrate the package into their projects'
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Code
    },
    {
      title: 'Unilevel Commission Management System',
      problem: 'Built a production-style commission platform for distributor networks with secure authentication, role-based workflows, automated monthly commission generation, and operational dashboards for admin and distributors. This is currently in production use by a client, and is being actively maintained and improved.',
      techStack: ['Node.js', 'Express', 'MySQL', 'JWT', 'HTML', 'CSS', 'JavaScript'],
      contributions: [
        'Designed and implemented REST APIs for authentication, user management, purchases, notifications, and settings administration',
        'Developed automated month-based commission generation logic with eligibility thresholds and safe update behavior for pending records',
        'Implemented role-based access control for admin and distributor workflows, including downline visibility and profile management',
        'Created operational dashboards for admins to monitor performance, commissions and user activities',
      ],
      githubUrl: 'https://github.com/omoluabidotcom/Unilevel-Commission-Management-System',
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
                        Summary
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
