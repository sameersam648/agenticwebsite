import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Connect Your Tools",
      description: "Integrate your existing business applications and platforms with our AI-powered workflow engine.",
      details: "Simply connect your email, CRM, project management tools, and other business applications through our secure API connections."
    },
    {
      number: "02", 
      title: "Define Your Workflows",
      description: "Use natural language to describe your business processes, or choose from our pre-built workflow templates.",
      details: "Our AI understands your requirements and automatically creates optimized workflows that adapt to your business needs."
    },
    {
      number: "03",
      title: "AI Learns & Optimizes",
      description: "Our intelligent agents analyze your workflows, learn from patterns, and continuously optimize for better performance.",
      details: "Machine learning algorithms identify bottlenecks, predict outcomes, and suggest improvements to maximize efficiency."
    },
    {
      number: "04",
      title: "Scale & Automate",
      description: "Watch as your optimized workflows run automatically, scaling with your business growth and adapting to changes.",
      details: "Real-time monitoring, automatic scaling, and intelligent error handling ensure your workflows perform flawlessly."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How FlowAI
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transforms Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our intelligent workflow automation platform that grows with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 shadow-lg scale-105'
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {activeStep > index ? <CheckCircle className="w-6 h-6" /> : step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-200 ${
                      activeStep === index ? 'text-purple-900' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-gray-600 mb-3 transition-colors duration-200 ${
                      activeStep === index ? 'text-gray-700' : ''
                    }`}>
                      {step.description}
                    </p>
                    {activeStep === index && (
                      <p className="text-sm text-purple-700 bg-purple-50 p-3 rounded-lg animate-fade-in">
                        {step.details}
                      </p>
                    )}
                  </div>
                  {activeStep === index && (
                    <ArrowRight className="w-6 h-6 text-purple-600 animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-3xl border border-purple-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Step {activeStep + 1}: {steps[activeStep].title}
                </h3>
                <p className="text-gray-600">
                  {steps[activeStep].details}
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              {/* Step Indicators */}
              <div className="flex justify-between">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index <= activeStep
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 scale-125'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/25">
            Start Your Automation Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;