import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const testimonials = [
    {
      name: 'Ankit Gupta',
      role: 'CEO, GuptaEnterprises',
      company: 'Local Business Owner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'TechSolutions ne humare business ke liye ek amazing website banaya hai. Niaz aur unki team bahut professional hai aur time pe delivery karte hain. Highly recommended!',
      project: 'E-commerce Website'
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Doctor, Patel Clinic',
      company: 'Healthcare Professional',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The patient management system they built for our clinic has revolutionized our workflow. The interface is intuitive and our staff loves using it. Excellent work!',
      project: 'Healthcare Dashboard'
    },
    {
      name: 'Rajesh Sharma',
      role: 'Owner, Sharma Restaurant',
      company: 'Restaurant Chain',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Humare restaurant ke liye jo online ordering app banaya hai, woh bilkul perfect hai. Customers ko bahut pasand aa raha hai aur sales bhi badh gaye hain.',
      project: 'Restaurant Mobile App'
    },
    {
      name: 'Priyanka Singh',
      role: 'Startup Founder',
      company: 'FinTech Startup',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b932?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Working with TechSolutions was a game-changer for our startup. They understood our vision perfectly and delivered a product that exceeded our expectations.',
      project: 'Finance Management Platform'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real feedback from real clients who trust us with their digital presence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
                <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                  Project: {testimonials[currentTestimonial].project}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Trusted by local businesses across Delhi NCR</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <span className="text-gray-600 dark:text-gray-300 font-semibold">GuptaEnterprises</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <span className="text-gray-600 dark:text-gray-300 font-semibold">Patel Clinic</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <span className="text-gray-600 dark:text-gray-300 font-semibold">Sharma Restaurant</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <span className="text-gray-600 dark:text-gray-300 font-semibold">FinTech Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
