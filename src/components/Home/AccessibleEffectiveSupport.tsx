import { HiPhone } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LuBrain, LuPhone } from 'react-icons/lu';

export default function AccessibleEffectiveSupport() {
  return (
    <section className=" py-16 px-6 text-center ">
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
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        {/* {album} */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Image */}

          <div className="relative">
            <img
              src="/images/ai-call-phone.jpg"
              alt="Image 2"
              className="w-full h-full rounded-lg "
            />
          </div>

          {/* Second Image */}
          <div className="relative">
            <img
              src="/images/ai-call-driving.jpg"
              alt="Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Third Image */}
          <div className="relative">
            <img
              src="/images/ai-call-bed.jpg"
              alt="Image 3"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Fourth Image */}
          <div className="relative">
            <img
              src="/images/ai-call-walking.jpg"
              alt="Image 4"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        {/* {chat} */}
        <div className="flex justify-center py-12 ">
          <div className="bg-blue-50 rounded-2xl shadow-md p-6 max-w-md w-full text-center border border-gray-100">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center mx-auto bg-blue-100 text-blue-600 rounded-full mb-4 text-2xl">
              <HiPhone />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-700">
              AI Agent Calling...
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Sarah M. - Weekly Check-in
            </p>

            {/* AI Message */}
            <div className="text-left bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-xs text-gray-500 font-medium mb-1">
                AI Agent:
              </p>
              <p className="text-gray-700">
                "Hi Sarah, this is your PsycheScreen wellness check. How have
                you been feeling this week?"
              </p>
            </div>

            {/* Patient Response */}
            <div className="text-left bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-blue-600 font-medium mb-1">
                Patient Response:
              </p>
              <p className="text-gray-700">
                "I've been feeling a bit anxious lately, especially about
                work..."
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm">
              <span className="flex items-center gap-1 text-green-600 font-medium">
                <IoMdCheckmarkCircleOutline /> Recording
              </span>
              <span className="flex items-center gap-1 text-blue-600 font-medium">
                <LuBrain /> AI Analysis Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
