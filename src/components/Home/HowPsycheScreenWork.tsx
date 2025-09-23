import { LuBrain, LuFile, LuPhone, LuUserCheck } from 'react-icons/lu';

export default function HowPsycheScreenWork() {
  const items = [
    {
      id: 1,
      title: 'Proactive AI Calls',
      desc: 'AI conducts empathetic conversations with patients.',
      icon: <LuPhone />,
    },
    {
      id: 2,
      title: 'Real-Time Analysis',
      desc: 'AI extracts emotional and psychological markers during calls.',
      icon: <LuFile />,
    },
    {
      id: 3,
      title: 'Therapist Reports',
      desc: 'Comprehensive reports enhance clinical decision-making.',
      icon: <LuBrain />,
    },
    {
      id: 4,
      title: 'Patient Engagement',
      desc: 'Ensures continuous support and monitoring 24/7.',
      icon: <LuUserCheck />,
    },
  ];

  return (
    <section className=" py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-7">
          How PsycheScreen Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-start gap-4 cursor-pointer rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-blue-600 font-bold bg-blue-100 rounded-lg p-3">
                    {item.icon}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
