import { HiOutlinePhone } from "react-icons/hi";
export default function HeroSection({setIsModalOpen}: {setIsModalOpen: (isModalOpen: boolean) => void}) { 
    return(
        <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl ">
            PsycheScreen
              <span className="block text-blue-600 pt-4">AI-Powered Mental Health Support </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              PsycheScreen provides cutting-edge psychological assessment tools that help healthcare professionals 
              identify and support mental health conditions with unprecedented accuracy and efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-8 py-2 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <HiOutlinePhone/>
             
               <span className="ml-2"> Start Patient Screening</span>
              </button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Accuracy Rate</div>
              <div className="text-sm text-gray-500">Clinical validation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Assessments</div>
              <div className="text-sm text-gray-500">Completed monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2min</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Average Time</div>
              <div className="text-sm text-gray-500">Per screening</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Healthcare</div>
              <div className="text-sm text-gray-500">Organizations</div>
            </div>
          </div>
        </div>
      </section>
    )
}