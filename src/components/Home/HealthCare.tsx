export default function HealthCare() {
  return (
    <section className=" py-12 px-6" id="aboutUs">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-5">
          Trusted by Healthcare Professionals
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Our platform is designed by mental health experts and trusted by
          psychiatric clinics worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white  rounded-lg shadow-sm border-gray-100 flex flex-col items-center overflow-hidden">
            <img
              src="/images/doctor-1.jpg"
              alt="Expert Clinical Support "
              className=" w-full h-64 object-cover rounded-lg mb-5"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Expert Clinical Support
              </h3>
              <p className="text-center text-gray-500 mt-4">
                Our platform is built with input from leading psychiatrists and
                mental health professionals.
              </p>
            </div>
          </div>
          <div className="bg-white  rounded-lg shadow-sm border-gray-200 flex flex-col items-center overflow-hidden">
            <img
              src="/images/healthcareTeam.jpg"
              alt="Health care team"
              className="w-full h-64 object-cover  mb-5"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Collaborative Care
              </h3>
              <p className="text-center text-gray-500 mt-4">
                Empowering healthcare teams with AI-driven insights for better
                patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
