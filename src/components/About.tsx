import React from 'react';
import { Users, Award, Clock, TrendingUp, MapPin, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [counters, setCounters] = React.useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0
  });

  const finalStats = {
    clients: 100,
    projects: 250,
    years: 5,
    satisfaction: 99
  };

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const clientStep = finalStats.clients / steps;
    const projectStep = finalStats.projects / steps;
    const yearStep = finalStats.years / steps;
    const satisfactionStep = finalStats.satisfaction / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        clients: Math.min(Math.round(clientStep * currentStep), finalStats.clients),
        projects: Math.min(Math.round(projectStep * currentStep), finalStats.projects),
        years: Math.min(Math.round(yearStep * currentStep), finalStats.years),
        satisfaction: Math.min(Math.round(satisfactionStep * currentStep), finalStats.satisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: `${counters.clients}+`, label: 'Happy Clients' },
    { icon: <Award className="h-8 w-8" />, number: `${counters.projects}+`, label: 'Projects Completed' },
    { icon: <Clock className="h-8 w-8" />, number: `${counters.years}+`, label: 'Years Experience' },
    { icon: <TrendingUp className="h-8 w-8" />, number: `${counters.satisfaction}%`, label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About TechSolutions
            </h2>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Based in Faridabad, Haryana 🇮🇳</span>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              हम एक passionate developers की team हैं जो exceptional web experiences create करने में dedicated है। 
              Modern technologies जैसे React, TypeScript, और Tailwind CSS में expertise के साथ, हम ऐसे solutions deliver करते हैं 
              जो न केवल beautiful हैं बल्कि functional और scalable भी हैं।
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our mission is to help local businesses और startups establish करना है एक strong online presence through innovative 
              web development solutions जो growth और success drive करते हैं।
            </p>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900 dark:text-white">Why Choose Us?</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✅ <strong>Local Understanding:</strong> Delhi NCR के businesses की needs समझते हैं</li>
                <li>✅ <strong>Affordable Pricing:</strong> Quality work at competitive rates</li>
                <li>✅ <strong>Quick Support:</strong> Same-day response guaranteed</li>
                <li>✅ <strong>Modern Tech:</strong> Latest technologies और best practices</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-blue-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=entropy&auto=format"
              alt="Our development team collaborating"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Active Projects: 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client-First Approach</h4>
              <p className="text-gray-600 dark:text-gray-300">आपकी success हमारी priority है। हम आपके business goals को achieve करने में help करते हैं।</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quality Assurance</h4>
              <p className="text-gray-600 dark:text-gray-300">हर project में best practices follow करते हैं और thorough testing ensure करते हैं।</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300">Latest technologies और creative solutions use करके आपको competitive edge देते हैं।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
