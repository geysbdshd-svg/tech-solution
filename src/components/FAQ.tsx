import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the complexity of your project. A simple website typically takes 2-3 weeks, while complex web applications can take 6-8 weeks. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer ongoing support and maintenance packages. This includes security updates, bug fixes, content updates, and technical support to ensure your website runs smoothly.'
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We specialize in modern web technologies including React, TypeScript, Node.js, Tailwind CSS, and various databases. We choose the best tech stack based on your project requirements.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! We build SEO-friendly websites with proper meta tags, fast loading speeds, and clean code. We can also provide guidance on digital marketing strategies to help grow your online presence.'
    },
    {
      question: 'Do you work with clients outside Faridabad?',
      answer: 'Yes, while we\'re based in Faridabad, we work with clients across India and internationally. We conduct meetings via video calls and use modern project management tools for seamless communication.'
    },
    {
      question: 'What\'s included in your web development packages?',
      answer: 'Our packages include responsive design, mobile optimization, basic SEO setup, contact forms, social media integration, and 3 months of free support. Custom features can be added based on your needs.'
    },
    {
      question: 'Do you offer mobile app development?',
      answer: 'Yes, we develop mobile applications using React Native, which allows us to create apps for both iOS and Android platforms with a single codebase, reducing cost and development time.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically work with a 50% advance payment to start the project and the remaining 50% upon completion. For larger projects, we can arrange milestone-based payments to make it more convenient.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Don't hesitate to reach out. We're here to help and answer any questions you might have.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
