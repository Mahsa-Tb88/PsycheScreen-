import { PiPhone } from 'react-icons/pi';
import { FaBrain, FaFileAlt, FaUsers, FaArrowRight } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

export default function HowPsycheScreenWork() {
  const steps = [
    {
      icon: <PiPhone className="text-white" size={28} />,
      title: 'Proactive AI Calls',
      description: 'AI conducts empathetic conversations with patients.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaBrain className="text-white" size={28} />,
      title: 'Real-Time Analysis',
      description:
        'AI extracts emotional and psychological markers during calls.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FaFileAlt className="text-white" size={28} />,
      title: 'Therapist Reports',
      description: 'Comprehensive reports enhance clinical decision-making.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FaUsers className="text-white" size={28} />,
      title: 'Patient Engagement',
      description: 'Ensures continuous support and monitoring 24/7.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="bg-gradient-to-br1 from-gray-9001 via-blue-8001 to-blue-9001 py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bgm-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            How PsycheScreen Works
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced AI technology working seamlessly to provide comprehensive
            mental health screening
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative ">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group ">
                {/* Step Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="flex justify-center mb-4">
                    <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <FaArrowRight className="text-white text-sm" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <HiLightningBolt className="text-yellow-400 text-2xl" />
            <span className="text-white font-semibold">
              Powered by Advanced AI Technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
