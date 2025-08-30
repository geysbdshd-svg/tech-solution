import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React, TypeScript, and Stripe integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      date: 'December 2024',
      client: 'Fashion Brand',
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Patient management system with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      technologies: ['React', 'Chart.js', 'Firebase', 'Material-UI'],
      date: 'November 2024',
      client: 'Medical Clinic',
    },
    {
      title: 'Restaurant App',
      description: 'Online ordering system with real-time order tracking',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      date: 'October 2024',
      client: 'Local Restaurant Chain',
    },
    {
      title: 'Finance Tracker',
      description: 'Personal finance management with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['React', 'TypeScript', 'Python', 'TensorFlow'],
      date: 'September 2024',
      client: 'FinTech Startup',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent projects that showcase our expertise and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <button className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Client: {project.client}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
