import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  const achievements = [
    'Engineered a zero-downtime data migration, migrating over one million death-certificate records from PostgreSQL into a different system using batch-processing strategies to ensure data integrity and zero data loss.',
    'Architected and developed an interoperability mediator enabling real-time RESTful API data exchange between SORMAS and DHIS2 for the Nigerian Federal Ministry of Health, streamlining disease-surveillance workflows.',
    'Led development of a mortality tracking system, transforming years-long manual data-collection processes into real-time reporting.',
    'Led the migration of Carribean countries mortality record from 90s till date from ICD-10 to ICD-11 with 98% accuracy.',
    'Drove a legacy-to-modern migration from Vaadin 8 to Vaadin 24, resulting in a 60% improvement in application load time and significantly better user experience.',
    'Expanded multilingual internationalization (i18n) support from 60% to 95% of the application surface area.',
    'Built a self-service form-definition feature for admin users to configure data-collection forms at runtime, eliminating error-prone manual database changes that had previously caused production outages.',
  ];

  const tech = ['Java', 'Spring Boot', 'PostgreSQL', 'DHIS2', 'SORMAS', 'Vaadin 24', 'REST APIs', 'i18n', 'Batch Processing'];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="03" title="Experience" />

        <Reveal>
          <div className="card p-8 relative overflow-hidden">
            <span
              className="absolute left-0 top-0 bottom-0 w-1 bg-accent-500"
              aria-hidden="true"
            />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 pl-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent-500/10">
                    <Briefcase className="text-accent-500" size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Software Engineer (Java)
                  </h3>
                </div>
                <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold">
                  Mirabilia Nig Limited
                </p>
              </div>
              <div className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-slate-400 shrink-0">
                <Calendar size={15} />
                Jan 2023 – Present
              </div>
            </div>

            <ul className="space-y-3 pl-4 mb-8">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 group p-2 -ml-2 rounded-lg hover:bg-accent-500/5 transition-colors"
                >
                  <CheckCircle2
                    className="text-accent-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    size={18}
                  />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pl-4">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-mono bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
