

export default function Navbar() {
  return (
    <nav className="shadow-sm border-b border-gray-200" style={{ backgroundColor: '#f7f5ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Section - Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm ring-1 ring-blue-500/20">
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
            <h1 className="text-xl font-semibold text-gray-900">PsycheScreen</h1>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Benefits
            </a>
            <a 
              href="#technology" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Technology
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Right Section - Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm rounded-lg transition-colors duration-200 font-medium">
           <span>Login</span>
            </button>
            
            <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-l from-sky-500 to-blue-600 text-white rounded-lg shadow-sm hover:from-sky-600 hover:to-blue-700 transition-colors duration-200 font-medium ring-1 ring-blue-500/20">
             
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


