import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center  border-t-1 border">
      <div className="max-w-3xl mx-auto ">
        <div className="flex flex-col justify-center items-center p-10">
          <div className="flex items-center">
            <div className="w-9 h-9 bg-gradient-to-r mr-3 from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm ring-1 ring-blue-500/20">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
              </svg>
            </div>
            <h3 className="text-slate-700 font-bold text-2xl">PsycheScreen</h3>
          </div>
          <p className="text-lg mt-3 text-gray-500 text-center">
            Revolutionizing mental healthcare with AI-powered patient assessment
            and continuous monitoring solutions.
          </p>
          <div className="flex flex-col items-baseline justify-start gap-y-1 space-x-4 mt-7">
            <div className="flex items-center ">
              <MdOutlineMail
                className="text-blue-600 mr-2 font-bold"
                size={18}
              />
              <span className="text-gray-500">contact@psychescreen.com</span>
            </div>
            <div className="flex items-center ">
              <FiPhone className="text-blue-600 mr-2 font-bold" size={18} />
              <span className="text-gray-500">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center ">
              <GrLocation className="text-blue-600 mr-2 font-bold" size={18} />
              <span className="text-gray-500">San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div className=" text-center py-4 border-t border-gray-200">
          <p className="text-gray-500">
            © 2024 PsycheScreen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
