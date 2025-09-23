import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="shadow-sm border-b border-gray-200 bg-gray-100 fixed w-full h-16 md:h-auto z-10 ">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Section - Logo and Brand Name */}
          <div className="flex items-center space-x-1 md:space-x-3">
            <div className="w-5 h-5 md:w-9 md:h-9 bg-gradient-to-r from-sky-500 to-blue-600 rounded-md md:rounded-xl flex items-center justify-center shadow-sm ring-1 ring-blue-500/20">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            </div>
            <h1 className="text-base md:text-xl font-semibold text-gray-900">
              PsycheScreen
            </h1>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#aboutUs"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              About us
            </a>
            <a
              href="#contact"
              className=" text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center">
            {/* Right Section - Action Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link
                className="text-xs md:text-base flex items-center space-x-2 px-1.5 py-1 md:px-4 md:py-2 text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm rounded-lg font-medium"
                to={'login'}
              >
                Login
              </Link>

              <Link
                to="signUp"
                className="text-xs md:text-base flex items-center space-x-2 px-1.5 py-1 md:px-6 md:py-2  bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700  font-medium ring-1 ring-blue-500/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-3">
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(open => !open)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={
              `fixed top-16 w-2/4 max-w-xs bg-white shadow-lg py-3 px-1 flex flex-col space-y-4 z-30 transform transition-transform duration-300 ease-in-out ` +
              (isMobileMenuOpen ? ' right-0' : ' -right-56')
            }
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end border rounded-full p- border-grey-400 hover:border-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <IoCloseSharp
                className="text-gray-400 hover:text-blue-700 "
                size={12}
              />
            </button>
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:bg-sky-100 px-3 py-2 hover:rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:bg-sky-100 px-3 py-2 hover:rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#aboutUs"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:bg-sky-100 px-3 py-2 hover:rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:bg-sky-100 px-3 py-2 hover:rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
