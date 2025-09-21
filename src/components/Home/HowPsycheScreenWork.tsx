import { PiPhone } from 'react-icons/pi';
import {
  FaBrain,
  FaFileAlt,
  FaUsers,
  FaArrowRight,
  FaPhone,
} from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { LuBrain, LuFile, LuPhone, LuUserCheck } from 'react-icons/lu';
import { LiaUser, LiaUsersSolid } from 'react-icons/lia';

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
        <h2 className="text-2xl font-bold text-gray-700 mb-10">
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
                  <span className="text-blue-600 font-bold">{item.icon}</span>{' '}
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

{
  /* <div className="flex flex-col justify-center items-center max-w-4xl mx-auto ">
      <h3 className="text-slate-800 font-bold text-4xl mb-12">
        How PsycheScreen Works
      </h3>

      <div className="">
        <div className="flex items-center gap-x-2">
          <PiPhone className="text-blue-500 text-2xl font-bold" size={20} />
          <h5 className="">Proactive AI Calls</h5>
        </div>
        <div>
          <p>AI conducts empathetic conversations with patients.</p>
        </div>
      </div>
    </div> */
}
