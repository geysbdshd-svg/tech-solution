import React from 'react';
import { Code, Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">TechSolutions</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional web development services using modern technologies to help your business succeed online.
              Delhi NCR में based, globally serving.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">mdniaz9193@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+91 9311238089</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Sector 37, Faridabad, Haryana - 121003</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Frontend Development</li>
              <li className="text-gray-400">Mobile-First Design</li>
              <li className="text-gray-400">Web Applications</li>
              <li className="text-gray-400">API Integration</li>
              <li className="text-gray-400">E-commerce Solutions</li>
              <li className="text-gray-400">SEO Optimization</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} TechSolutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <span className="text-gray-400">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-gray-400">in India</span>
              <span className="text-xl">🇮🇳</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Serving Delhi NCR • Faridabad • Gurgaon • Noida • Delhi • Ghaziabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
