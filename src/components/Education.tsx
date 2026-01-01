import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Higher National Diploma',
      field: 'Physics/Electronics',
      institution: 'Federal Polytechnic, Bida',
      year: '2021',
      gpa: '3.40/4.0'
    },
    {
      degree: 'National Diploma',
      field: 'Science Laboratory Technology',
      institution: 'Federal Polytechnic, Bida',
      year: '2017',
      gpa: null
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {edu.field}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{edu.year}</span>
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-emerald-600 dark:text-emerald-400" />
                          <span className="font-semibold">GPA: {edu.gpa}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
