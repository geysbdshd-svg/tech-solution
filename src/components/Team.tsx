import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Md Niaz Ahmed',
      role: 'Lead Developer & Founder',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with 5+ years of experience in React, TypeScript, and modern web technologies.',
      location: 'Faridabad, Haryana',
      skills: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'mdniaz9193@gmail.com'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer focused on user experience and modern design principles with attention to detail.',
      location: 'Delhi, India',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'priya@techsolutions.dev'
      }
    },
    {
      name: 'Rahul Kumar',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face',
      bio: 'Backend specialist with expertise in cloud infrastructure, APIs, and database optimization.',
      location: 'Gurgaon, Haryana',
      skills: ['Python', 'AWS', 'PostgreSQL', 'Docker'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'rahul@techsolutions.dev'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={member.social.linkedin}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a 
                        href={member.social.twitter}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a 
                        href={member.social.github}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  📍 {member.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for talented individuals to join our growing team
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Openings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
