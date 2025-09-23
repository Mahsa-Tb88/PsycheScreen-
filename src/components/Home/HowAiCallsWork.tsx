import { BiChat } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { LuBrain } from 'react-icons/lu';

export default function HowAiCallsWork() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
      id="features"
    >
      <div className="bg-blue-100 p-6 rounded-lg border border-blue-200  ">
        <div className="flex space-x-12 justify-center">
          <div className="text-center">
            <div className="w-14 h-14 bg-blue-200 rounded-full mx-auto flex items-center justify-center">
              <span>
                <IoChatbubbleOutline
                  className="text-blue-600 font-bold"
                  size={25}
                />
              </span>
            </div>
            <h3 className="mt-2 font-medium">Patient Registration</h3>
            <p className="text-sm text-gray-500">
              Patient fills out initial form with contact information
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-blue-200 rounded-full mx-auto flex items-center justify-center">
              <FiPhone className="text-blue-600 font-bold" size={25} />
            </div>
            <h3 className="mt-2 font-medium">AI Outreach</h3>
            <p className="text-sm text-gray-500">
              AI agent automatically calls patient at scheduled time
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-blue-200 rounded-full mx-auto flex items-center justify-center">
              <LuBrain className="text-blue-600 font-bold" size={25} />
            </div>
            <h3 className="mt-2 font-medium">Empathetic Conversation</h3>
            <p className="text-sm text-gray-500">
              AI conducts natural conversation about mental health status
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-blue-200 rounded-full mx-auto flex items-center justify-center">
              <IoMdCheckmarkCircleOutline
                className="text-blue-600 font-bold"
                size={25}
              />
            </div>
            <h3 className="mt-2 font-medium">Data Analysis</h3>
            <p className="text-sm text-gray-500">
              Insights are processed and sent to healthcare providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
