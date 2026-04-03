import { Code2, Server, Wrench, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Systems',
      description: 'Building national-scale health and government platforms'
    },
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'RESTful APIs, microservices, and maintainable code'
    },
    {
      icon: Wrench,
      title: 'DevOps Practices',
      description: 'CI/CD pipelines, Docker, Jenkins, and cloud deployment'
    },
    {
      icon: TrendingUp,
      title: 'Performance Focus',
      description: 'Optimizing systems for scalability and reliability'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black border-b border-space-gray-200 dark:border-space-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-space-gray-700 dark:text-space-gray-300 leading-relaxed">
              I'm a Java developer with extensive experience building enterprise-grade backend systems that power critical infrastructure and serve thousands of users.
            </p>
            <p className="text-lg text-space-gray-700 dark:text-space-gray-300 leading-relaxed">
              My expertise lies in designing and implementing scalable microservices architectures using Spring Boot, REST APIs, and modern DevOps practices. I've worked on national-scale health and government platforms, where reliability and performance are paramount.
            </p>
            <p className="text-lg text-space-gray-700 dark:text-space-gray-300 leading-relaxed">
              I'm passionate about writing clean, maintainable code, implementing robust CI/CD pipelines, and delivering software that makes a real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-space-gray-50 dark:bg-space-gray-900/50 rounded-lg border border-space-gray-200 dark:border-space-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Icon className="text-black dark:text-white mb-3" size={32} />
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-space-gray-600 dark:text-space-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
