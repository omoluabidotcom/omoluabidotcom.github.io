import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Postgraduate Diploma',
      field: 'Information Technology',
      institution: 'National Open University of Nigeria',
      year: 'January 2026 - December 2026',
      gpa: null,
      location: 'Abuja, Nigeria'
    },
    {
      degree: 'Higher National Diploma',
      field: 'Physics/Electronics',
      institution: 'Federal Polytechnic, Bida',
      year: '2021',
      gpa: '3.40/4.0',
      location: 'Niger, Nigeria'
    },
    {
      degree: 'National Diploma',
      field: 'Science Laboratory Technology',
      institution: 'Federal Polytechnic, Bida',
      year: '2017',
      gpa: null,
      location: 'Niger, Nigeria'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-black border-b border-space-gray-200 dark:border-space-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">
          Education
        </h2>
        <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-space-gray-50 dark:bg-space-gray-900/50 rounded-lg p-8 border border-space-gray-200 dark:border-space-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-black dark:text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-black dark:text-white font-semibold mb-2">
                    {edu.field}
                  </p>
                  <p className="text-space-gray-700 dark:text-space-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-sm text-space-gray-600 dark:text-space-gray-400 mb-2">
                      {edu.location}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-space-gray-600 dark:text-space-gray-400">
                    <span className="font-medium">{edu.year}</span>
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-black dark:text-white" />
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="flex items-center justify-center gap-4 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg p-8 border border-space-gray-300 dark:border-space-gray-700">
            <Award className="text-black dark:text-white flex-shrink-0" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white">
                Building RAG Agents with LLMs
              </h4>
              <p className="text-space-gray-700 dark:text-space-gray-300">
                NVIDIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
