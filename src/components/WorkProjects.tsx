import { Briefcase, Building2, Globe2 } from 'lucide-react';

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
        'Upgraded the frontend framework from Vaadin 8 to Vaadin 23 for better maintainability and modern capabilities.'
      ],
      icon: Globe2
    },
    {
      title: 'Interoperability System for Data Exchange Between NCDC and FMOH',
      summary:
        'Built and deployed interoperability services to automate bidirectional health data exchange between national systems using OpenHIM as a mediation layer.',
      techStack: ['Java', 'SpringMVC', 'SpringBoot', 'DHIS2', 'SORMAS', 'OpenHIM', 'Docker'],
      contributions: [
        'Deployed and configured the OpenHIM console for secure interoperability workflows.',
        'Built Java services that pull data from DHIS2 and route it through OpenHIM to SORMAS.',
        'Built Java services that pull data from SORMAS and route it through OpenHIM to DHIS2.'
      ],
      icon: Building2
    },
    {
      title: 'Mortality App',
      summary:
        'Delivered high-throughput mortality data processing and real-time death registration capabilities integrated with DHIS2 for regional public health operations.',
      techStack: ['Java', 'SpringBoot', 'Reactjs', 'DHIS2', 'ICD-10', 'ICD-11'],
      contributions: [
        'Built backend processing pipelines for 1 million death certificates into DHIS2 with zero downtime.',
        'Implemented a feature to convert ICD-10 data into equivalent ICD-11 codes.',
        'Built a DHIS2-based app enabling real-time death certificate entry across CARPHA countries.'
      ],
      icon: Briefcase
    }
  ];

  return (
    <section id="work-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Projects
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
                        {project.summary}
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
