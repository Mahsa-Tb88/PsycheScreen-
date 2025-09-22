import { HiOutlinePhone } from 'react-icons/hi';
export default function HeroSection({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  return (
    <section className="py-16 lg:py-24  relative ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl ">
            PsycheScreen
            <span className="block text-blue-600 pt-4">
              AI-Powered Mental Health Support{' '}
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            PsycheScreen provides cutting-edge psychological assessment tools
            that help healthcare professionals identify and support mental
            health conditions with unprecedented accuracy and efficiency.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-8 py-2 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <HiOutlinePhone />

              <span className="ml-2"> Start User Screening</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
