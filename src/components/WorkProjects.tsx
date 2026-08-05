import { Briefcase, Building2, Globe2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

type WorkProject = {
  title: string;
  summary: string;
  techStack: string[];
  contributions: string[];
  icon: typeof Briefcase;
};

export default function WorkProjects() {
  const projects: WorkProject[] = [
    {
      title: 'Polio Management System for CDC in Afghanistan',
      summary:
        'Contributed to platform reliability, mobile engagement, and modernization efforts for a large-scale public health system used in production across critical immunization workflows.',
      techStack: ['Java', 'SpringMVC', 'J2EE', 'EJB', 'Android(Java)', 'Firebase Messaging', 'i18n', 'Vaadin 23', 'SORMAS'],
      contributions: [
        'Integrated Firebase Cloud Messaging for reliable push notifications to mobile devices.',
        'Implemented internationalization upgrades for multilingual app experiences.',
        'Maintained and improved a legacy Android codebase that remains in active production.',
        'Designed and implemented an end-to-end custom form definition flow to prevent app-breaking form configuration issues.',
        'Upgraded the frontend framework from Vaadin 8 to Vaadin 23 for better maintainability and modern capabilities.',
      ],
      icon: Globe2,
    },
    {
      title: 'Interoperability System for Data Exchange Between NCDC and FMOH',
      summary:
        'Built and deployed interoperability services to automate bidirectional health data exchange between national systems using OpenHIM as a mediation layer.',
      techStack: ['Java', 'SpringMVC', 'SpringBoot', 'DHIS2', 'SORMAS', 'OpenHIM', 'Docker'],
      contributions: [
        'Deployed and configured the OpenHIM console for secure interoperability workflows.',
        'Built services that pull data from DHIS2 and route it through OpenHIM to SORMAS.',
        'Built services that pull data from SORMAS and route it through OpenHIM to DHIS2.',
      ],
      icon: Building2,
    },
    {
      title: 'Mortality App',
      summary:
        'Delivered high-throughput mortality data processing and real-time death registration capabilities integrated with DHIS2 for regional public health operations.',
      techStack: ['Java', 'SpringBoot', 'Reactjs', 'DHIS2', 'ICD-10', 'ICD-11'],
      contributions: [
        'Built backend processing pipelines for 1 million death certificates into DHIS2 with zero downtime.',
        'Implemented a feature to convert ICD-10 data into equivalent ICD-11 codes.',
        'Built a DHIS2-based app enabling real-time death certificate entry across CARPHA countries.',
      ],
      icon: Briefcase,
    },
  ];

  return (
    <section id="work-projects" className="py-24 bg-canvas-light dark:bg-canvas-dark">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Featured Work"
          subtitle="Production systems delivered for national health and government platforms."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal as="article" key={index} delay={(index % 3) * 80} className="h-full">
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
                    {project.summary}
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

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
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
