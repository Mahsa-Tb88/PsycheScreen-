import { LuPhone } from 'react-icons/lu';

export default function AccessibleEffectiveSupport() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-500 text-white rounded-full text-sm font-medium mb-4">
          <span>
            <LuPhone />
          </span>
          AI-Powered Outreach
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
          PsycheScreen:{' '}
          <span className="text-blue-600">
            Accessible and Effective Support
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed">
          Our AI agent proactively reaches out to patients, conducting
          empathetic conversations to gather crucial mental health insights for
          healthcare providers.
        </p>
      </div>
    </section>
  );
}
