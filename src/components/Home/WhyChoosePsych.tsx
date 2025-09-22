import HowPsycheScreenWork from './HowPsycheScreenWork';

export default function WhyChoosePsych() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose PsycheScreen?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Advanced technology meets clinical expertise for better mental
            health outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-700">
                Clinical Accuracy
              </h3>
            </div>
            <p className="text-gray-500">
              Evidence-based assessments validated by leading mental health
              professionals and research institutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-700">
                Fast Results
              </h3>
            </div>
            <p className="text-gray-500">
              Get comprehensive screening results in minutes, not days.
              Streamline your workflow and patient care.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-700">
                Secure & Compliant
              </h3>
            </div>
            <p className="text-gray-500">
              HIPAA-compliant platform with enterprise-grade security to protect
              patient data and privacy.
            </p>
          </div>
        </div>
      </section>
      <HowPsycheScreenWork />
      {/* Footer */}
      <footer className="mt-16 text-center py-8 border-t border-gray-200">
        <p className="text-gray-500">
          © 2024 PsycheScreen. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
