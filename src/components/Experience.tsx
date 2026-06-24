import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export default function Experience() {
  const achievements = [
    'Engineered a zero-downtime data migration, migrating over one million death-certificate records from PostgreSQL into a different system using batch-processing strategies to ensure data integrity and zero data loss.',
    'Architected and developed an interoperability mediator enabling real-time RESTful API data exchange between SORMAS and DHIS2 for the Nigerian Federal Ministry of Health, streamlining disease-surveillance workflows.',
    'Led development of a mortality tracking system, transforming years-long manual data-collection processes into real-time reporting.',
    'Drove a legacy-to-modern migration from Vaadin 8 to Vaadin 24, resulting in a 60% improvement in application load time and significantly better user experience.',
    'Expanded multilingual internationalization (i18n) support from 60% to 95% of the application surface area.',
    'Built a self-service form-definition feature for admin users to configure data-collection forms at runtime, eliminating error-prone manual database changes that had previously caused production outages.'
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="relative">
          <div className="relative bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8 border-2 border-blue-600 dark:border-blue-400 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Software Engineer(Java)
                  </h3>
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Mirabilia Nig Limited
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>Jan 2023 – Present</span>
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
              {['Java', 'Spring Boot', 'PostgreSQL', 'DHIS2', 'SORMAS', 'Vaadin 24', 'REST APIs', 'i18n', 'Batch Processing'].map((tech, index) => (
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
