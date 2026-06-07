import { Code2, Server, Wrench, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Systems',
      description: 'Building large-scale systems for critical infrastructure and public health platforms'
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
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Senior Java Engineer with extensive experience building enterprise-grade backend systems that power critical infrastructure.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise lies in designing and implementing scalable microservices architectures using Spring Boot, REST APIs, and modern DevOps practices. I've worked on national-scale health and government platforms, enterprise systems where reliability and performance are paramount. I have a strong experience modernizing legacy systems, optimizing performance, and ensuring software quality.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about delivering software that makes a real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Icon className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
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
