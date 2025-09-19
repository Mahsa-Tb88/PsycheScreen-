export default function HowPsycheScreenWork() {
  const steps = [
    {
      number: 1,
      icon: '📞',
      title: 'Proactive AI Calls',
      description: 'AI conducts empathetic conversations with patients.',
    },
    {
      number: 2,
      icon: '🧠',
      title: 'Real-Time Analysis',
      description:
        'AI extracts emotional and psychological markers during calls.',
    },
    {
      number: 3,
      icon: '📄',
      title: 'Therapist Reports',
      description: 'Comprehensive reports enhance clinical decision-making.',
    },
    {
      number: 4,
      icon: '👥',
      title: 'Patient Engagement',
      description: 'Ensures continuous support and monitoring 24/7.',
    },
  ];

  return (
    <div className="bg-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          How PsycheScreen Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map(step => (
            <div key={step.number} className="flex items-start space-x-4">
              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl text-gray-700">{step.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
