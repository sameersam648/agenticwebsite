import React, { useState } from 'react';
import { Building2, Users, HeadphonesIcon, TrendingUp, Calculator } from 'lucide-react';

const UseCases: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCases = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Operations Management",
      description: "Streamline daily operations with automated task routing, resource allocation, and performance monitoring.",
      benefits: ["50% reduction in manual tasks", "Real-time operational visibility", "Automated compliance reporting"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Financial Operations",
      description: "Automate budgeting, expense tracking, invoice processing, and financial reporting with AI precision.",
      benefits: ["90% faster invoice processing", "Automated expense categorization", "Predictive budget analysis"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human Resources",
      description: "Transform HR processes with automated recruiting, onboarding, performance tracking, and employee engagement.",
      benefits: ["75% faster hiring process", "Automated candidate screening", "Smart performance insights"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Customer Support",
      description: "Deliver exceptional customer experiences with intelligent ticket routing, automated responses, and sentiment analysis.",
      benefits: ["60% faster resolution times", "24/7 intelligent responses", "Predictive issue detection"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales & Marketing",
      description: "Boost revenue with automated lead scoring, personalized campaigns, and intelligent sales funnel optimization.",
      benefits: ["200% increase in qualified leads", "Automated campaign optimization", "Predictive sales forecasting"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Solutions for
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Every Department
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how FlowAI transforms operations across your entire organization with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Use Case Cards */}
          <div className="lg:col-span-1 space-y-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeUseCase === index
                    ? 'bg-white shadow-xl border-2 border-purple-200 scale-105'
                    : 'bg-white/70 hover:bg-white hover:shadow-lg border border-gray-200'
                }`}
                onClick={() => setActiveUseCase(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.gradient} text-white transition-transform duration-300 ${
                    activeUseCase === index ? 'scale-110' : ''
                  }`}>
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg transition-colors duration-200 ${
                      activeUseCase === index ? 'text-purple-900' : 'text-gray-900'
                    }`}>
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Use Case Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full">
              <div className="mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${useCases[activeUseCase].gradient} text-white mb-6`}>
                  {useCases[activeUseCase].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {useCases[activeUseCase].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {useCases[activeUseCase].description}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">Key Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {useCases[activeUseCase].benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl border border-purple-100 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <p className="text-purple-800 font-medium text-center">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className={`bg-gradient-to-r ${useCases[activeUseCase].gradient} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}>
                  Learn More About {useCases[activeUseCase].title}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "300%", label: "Productivity Increase" },
            { value: "75%", label: "Cost Reduction" },
            { value: "24/7", label: "Automated Operations" },
            { value: "99.9%", label: "Uptime Reliability" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;