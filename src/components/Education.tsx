import { GraduationCap, Award, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Education() {
  const education = [
    {
      degree: 'Postgraduate Diploma',
      field: 'Information Technology',
      institution: 'National Open University of Nigeria',
      year: 'January 2026 - December 2026',
      gpa: null,
      location: 'Abuja, Nigeria',
    },
    {
      degree: 'Higher National Diploma',
      field: 'Physics/Electronics',
      institution: 'Federal Polytechnic, Bida',
      year: '2021',
      gpa: '3.40/4.0',
      location: 'Niger, Nigeria',
    },
    {
      degree: 'National Diploma',
      field: 'Science Laboratory Technology',
      institution: 'Federal Polytechnic, Bida',
      year: '2017',
      gpa: null,
      location: 'Niger, Nigeria',
    },
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="07" title="Education" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Reveal key={index} delay={(index % 3) * 80}>
              <div className="card p-6 h-full hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent-500/10 shrink-0">
                    <GraduationCap className="text-accent-500" size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-600 dark:text-accent-400 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <MapPin size={13} />
                        {edu.location}
                      </p>
                    )}
                    <div className="flex items-center gap-3 font-mono text-sm text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/10">
                      <span>{edu.year}</span>
                      {edu.gpa && (
                        <span className="inline-flex items-center gap-1.5 text-accent-600 dark:text-accent-400">
                          <Award size={14} />
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
