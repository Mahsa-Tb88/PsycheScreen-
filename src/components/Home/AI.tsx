import { LuBrainCircuit } from 'react-icons/lu';

export default function AI() {
  return (
    <section className=" py-16 px-6 text-center ">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-500 text-white rounded-full text-sm font-medium mb-4">
          <span>
            <LuBrainCircuit />
          </span>
          AI-Led Mental Health Support
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
          PsycheScreen:{' '}
          <span className="text-blue-600">How PsycheScreen Works</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed mb-6">
          After Registeration, our AI agent proactively reaches out to patients,
          conducting empathetic conversations to gather crucial mental health
          insights for healthcare providers.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* {album} */}
        <div className="grid md:grid-cols-4 gap-4">
          {/* First Image */}

          <div className="relative">
            <img
              src="/images/register.jpg"
              alt="Image 2"
              className="w-full h-full rounded-lg "
            />
          </div>

          {/* Second Image */}
          <div className="relative">
            <img
              src="/images/outreach.jpg"
              alt="Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Third Image */}
          <div className="relative">
            <img
              src="/images/conversation.jpg"
              alt="Image 3"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Fourth Image */}
          <div className="relative">
            <img
              src="/images/analysis.jpg
              "
              alt="Image 4"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
