import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Code className="h-8 w-8" />, title: 'Frontend Development', description: 'Modern React applications with TypeScript and responsive design using Tailwind CSS.' },
    { icon: <Smartphone className="h-8 w-8" />, title: 'Mobile-First Design', description: 'Responsive designs that work perfectly on all devices, from mobile to desktop.' },
    { icon: <Globe className="h-8 w-8" />, title: 'Web Applications', description: 'Full-stack web applications with modern architecture and best practices.' },
    { icon: <Database className="h-8 w-8" />, title: 'API Integration', description: 'Seamless integration with REST APIs and database management systems.' },
    { icon: <Shield className="h-8 w-8" />, title: 'Security & Performance', description: 'Secure and optimized applications with best-in-class performance.' },
    { icon: <Zap className="h-8 w-8" />, title: 'Fast Delivery', description: 'Quick turnaround times without compromising on quality and standards.' },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your business succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
