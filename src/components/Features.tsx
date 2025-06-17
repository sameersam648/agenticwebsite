import React from 'react';
import { Bot, BarChart, DollarSign, MessageSquare, Workflow, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Adaptive AI Workflow Automation",
      description: "Intelligent agents that learn from your processes and continuously optimize workflows for maximum efficiency.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automated Scheduling & Communications",
      description: "Smart scheduling that coordinates across teams, time zones, and platforms with automated follow-ups.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-time Analytics & Insights",
      description: "Predictive dashboards that provide actionable insights and forecast business trends with AI precision.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Automated Budgeting & Invoicing",
      description: "Smart financial operations that handle budgeting, expense tracking, and invoice generation automatically.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Interface",
      description: "Control your workflows using plain English commands. No technical expertise required.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Seamless Integrations",
      description: "Connect with 200+ business tools and platforms for unified workflow orchestration.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features That
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to automate, optimize, and scale your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/25">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;