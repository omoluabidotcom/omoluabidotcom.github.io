import { ExternalLink, Github, Code, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

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
      icon: Code,
    },
    {
      title: 'Chatbot Application with LLM Integration',
      problem: 'Built an intelligent chatbot application integrating LLM APIs with automated CI/CD pipeline for consistent, zero-manual-intervention deployments',
      techStack: ['Spring AI', 'Docker', 'Jenkins', 'Maven', 'Java', 'LLM APIs'],
      contributions: [
        'Integrated LLM APIs using SpringAI to streamline application interaction with language models',
        'Containerized application with Docker, improving deployment consistency and eliminating environment-related failures',
        'Implemented full CI/CD pipeline using Jenkins and Docker for automated build, test, and deployment',
        'Enabled zero-manual-intervention releases with automated rollback capabilities',
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Zap,
    },
    {
      title: 'Published a Java Package',
      problem: 'Published a Java package to Sonatype for the Java frontend framework(Vaadin), enabling developers to easily collect phone numbers from users with built-in validation and formatting with country code support',
      techStack: ['Java', 'Maven', 'Vaadin', 'Junit'],
      contributions: [
        'Published a Java package to Sonatype for the Vaadin framework, enabling developers to easily collect phone numbers from users with built-in validation and formatting',
        'Implemented unit tests using Junit to ensure package reliability and functionality',
        'Configured Maven for seamless package deployment and version management',
        'Provided comprehensive documentation for developers to integrate the package into their projects',
      ],
      githubUrl: 'https://github.com/omoluabidotcom',
      icon: Code,
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
      icon: Zap,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          title="Personal Projects"
          subtitle="Things I've built to explore ideas, ship products, and sharpen my craft."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal as="article" key={index} delay={(index % 2) * 80} className="h-full">
                <div className="card p-6 h-full flex flex-col hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-accent-500/10 shrink-0">
                      <Icon className="text-accent-500" size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.problem}
                  </p>

                  <div className="mb-4">
                    <p className="eyebrow mb-2">Key Contributions</p>
                    <ul className="space-y-1.5">
                      {project.contributions.map((contribution, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-white/10 text-sm font-medium text-accent-600 dark:text-accent-400"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                    View on GitHub
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
