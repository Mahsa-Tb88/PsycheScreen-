import { VscClose } from "react-icons/vsc";
import { BiSolidUser } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";



type PatientFormValues = {
  firstName: string;
  phone: string;
};

export default function PatinentScreenModal({ setIsModalOpen }: { setIsModalOpen: (isModalOpen: boolean) => void }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PatientFormValues>({
    defaultValues: { firstName: "", phone: "" }
  });
  const [timeLeft, setTimeLeft] = useState(120);

  // شمارنده معکوس
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState<number | string>("");
  const [verificationError, setVerificationError] = useState("");
  const [AIAssessmentInfo, setAIAssessmentInfo] = useState(false);

  const onSubmit = (data: PatientFormValues) => {
    //  call my API

    console.log("Submitting:", data);
    setShowVerificationInput(true);


  };

  function handleVerifyCode() {
    //send code to backend to verify code

    if (verificationCode < 300000) {
      setVerificationError("Invalid code");
      return
    }
    setShowVerificationInput(false)
    setAIAssessmentInfo(true);
  }

  function handleResendCode() {
    setTimeLeft(120)
    setVerificationCode("")

  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Patient Screening Form</h2>
            <p className="text-sm text-gray-600 mt-1">Enter patient details to initiate AI-powered mental health assessment</p>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors "
          >
            <VscClose size={20} />
          </button>
        </div>

        {/* Modal Body */}
        {!showVerificationInput && !AIAssessmentInfo && <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/*  Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2"> Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BiSolidUser size={17} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter name"
                  {...register('firstName', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiPhone size={17} className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter phone number"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^\+?[0-9\s()-]{7,}$/, message: 'Enter a valid phone number' }
                  })}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 pb-6 mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                {isSubmitting ? 'Submitting…' : 'Submit for AI Assessment'}
                {!isSubmitting && (
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                )}
              </button>
              {/* Verification Code Input Box */}


            </div>
          </form>
        </div>}
        {showVerificationInput && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 m-6">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Enter Verification Code</h3>
            <p className="text-sm text-blue-800 mb-3">
              Please enter the verification code sent to your phone.
            </p>
            <input
              type="text"
              maxLength={6}
              className="block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
              placeholder="6-digit code"
              value={verificationCode}
              onChange={e => setVerificationCode(e.target.value.replace(/\D/, ''))}
            />
            <p>
              {timeLeft > 0 ? (
                <span className="text-green-600">
                  Time remaining: {Math.floor(timeLeft / 60)}:
                  {String(timeLeft % 60).padStart(2, "0")}
                </span>
              ) : (
                <span className="text-red-600">Code expired!</span>
              )}
            </p>
            {verificationError && (
              <p className="text-sm text-red-600 mb-2">{verificationError}</p>
            )}
            {
              timeLeft > 0 ?
                <button
                  type="button"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 mt-3"
                  onClick={handleVerifyCode}
                >
                  Verify Code
                </button> :
                <button
                  type="button"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 mt-3"
                  onClick={handleResendCode}
                >
                  Resend Code
                </button>
            }
          </div>
        )}
        {AIAssessmentInfo && (
          <div>
            <div className=" flex px-4 items-center my-3">
              <FaCheck className="text-green-500 " />
              <h3 className="px-1 text-green-500">code submitted successfully!</h3>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 m-4 mt-2">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">AI Assessment Process</h3>
              <p className="text-sm text-blue-800 mt-1">
                Our AI agent will call within 24 hours to conduct a comprehensive mental health screening using evidence-based assessment protocols.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
