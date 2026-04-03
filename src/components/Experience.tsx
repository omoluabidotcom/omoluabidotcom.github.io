import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export default function Experience() {
  const achievements = [
    'Executed large-scale data migration, handling 850,000+ death certificate records with zero downtime',
    'Architected and implemented an interoperability mediator enabling real-time data exchange between SORMAS and DHIS2 systems for Nigerian Federal Ministry of Health, streamlining disease surveillance workflows',
    'Led development for DHIS2 Mortality Tracking System, transforming years-long data collection processes into real-time reporting capabilities for health officials',
    'Played pivotal role in transitioning legacy system from Vaadin 8 to Vaadin 24, achieving 60% performance increase across application',
    'Expanded application multilingual support from 60% to 95%, ensuring broader user adoption',
    'Built feature for admin users to create form definitions in data-collection system, previously done manually in database, improving configuration efficiency',
    'Deployed and customized enterprise platforms (SORMAS, WSO2 IoT server, OpenHIM, DHIS2) on Linux server instances supporting critical health information systems',
    'Led team of 5 developers to write user manual and record video guides for Mortality App, resulting in 45% increase in usage'
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600 dark:bg-blue-400"></div>

          <div className="relative bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8 border-2 border-blue-600 dark:border-blue-400 shadow-xl">
            <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>

            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Java Developer
                  </h3>
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Mirabilia Nig Limited
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>May 2023 – Present</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:bg-white dark:hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                >
                  <CheckCircle className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Spring Boot', 'Spring AI', 'DHIS2', 'SORMAS', 'Vaadin', 'Docker', 'Jenkins', 'React.js', 'PostgreSQL', 'AWS', 'REST APIs', 'Microservices'].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
