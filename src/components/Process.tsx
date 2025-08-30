import React from 'react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Discovery & Planning',
      description: 'We discuss your requirements, goals, and vision to create a detailed project roadmap.',
      duration: '2-3 Days',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.',
      duration: '5-7 Days',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Development',
      description: 'Building your application with clean, maintainable code and best practices.',
      duration: '2-4 Weeks',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Testing & Launch',
      description: 'Thorough testing, optimization, and deployment to ensure everything works perfectly.',
      duration: '3-5 Days',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures quality delivery and client satisfaction
          </p>
        </div>

        <div className="relative">
          {/* Desktop view */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center max-w-xs">
                  <div className="relative">
                    <div className="bg-blue-600 text-white p-4 rounded-full mb-4 shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-2">
                    {step.description}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {step.duration}
                  </span>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-32 h-0.5 bg-blue-200 dark:bg-blue-700 transform translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-blue-200 dark:bg-blue-700 transform -translate-x-0.5"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {step.description}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss your requirements and create something amazing together!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
