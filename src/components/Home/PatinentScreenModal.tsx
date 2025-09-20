import { VscClose } from 'react-icons/vsc';
import { BiSolidUser } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi';
import { HiMail } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';

type PatientFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export default function PatinentScreenModal({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormValues>({
    defaultValues: { firstName: '', lastName: '', phone: '', email: '' },
  });
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const [verificationCode, setVerificationCode] = useState<number | string>('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<{
    status: boolean;
    msg: string;
  }>({
    status: false,
    msg: '',
  });
  const [isValidCode, setIsValidCode] = useState<{
    status: boolean;
    msg: string;
  }>({
    status: false,
    msg: '',
  });

  const [verificationError, setVerificationError] = useState('');
  const [isVerifyingPhone, setIsVerifyingPhone] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: PatientFormValues) => {
    //  call my API
    setIsSubmitted(true);

    console.log('Submitting:', data);
  };
  const phoneValue = watch('phone', '');

  async function handleVerifyCode() {
    //send code to backend to verify code
    setIsVerifyingCode(true);
    setVerificationError('');

    try {
      // Simulate backend request delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const codeNumber = Number(verificationCode);
      if (isNaN(codeNumber) || codeNumber < 300000) {
        setVerificationError('Invalid code');
        return;
      }
      setIsValidCode({ status: true, msg: '' });
      // Proceed to AI assessment
    } catch (error) {
      console.error('Code verification failed:', error);
      setVerificationError('Verification failed. Please try again.');
    } finally {
      setIsVerifyingCode(false);
    }
  }

  async function checkValidPhoneNumber() {
    const phone = getValues('phone');
    const phoneRegex = /^\d{10}$/;
    console.log('phone is', phone);

    if (phoneRegex.test(phone)) {
      // Phone is valid
      setIsVerifyingPhone(true);

      try {
        // Simulate backend request delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        //here we send the request to backend
        console.log('trueee');
        setIsValidPhoneNumber({ status: true, msg: '' });
      } catch (error) {
        console.error('Phone verification failed:', error);
        setIsValidPhoneNumber({
          status: false,
          msg: 'Phone verification failed. Please try again.',
        });
      } finally {
        setIsVerifyingPhone(false);
      }
    } else {
      console.log('falseee');

      setIsValidPhoneNumber({
        status: false,
        msg: 'Phone number is not valid',
      });
    }
  }

  async function editPhoneNumber() {
    setIsValidPhoneNumber({ status: false, msg: '' });
    setVerificationCode('');
    setIsValidCode({ status: false, msg: '' });
    setTimeLeft(30);
    setVerificationError('');
  }

  function handleResendCode() {
    setTimeLeft(30);
    setVerificationCode('');
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
      {isSubmitted ? (
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <FaCheck className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              Your information has been successfully submitted for AI-powered
              mental health assessment.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              What happens next?
            </h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p className="flex items-center">
                <span className="font-semibold mr-2">📞</span>
                We will give you a call within 24 hours
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">📧</span>
                You will receive a confirmation email shortly
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                User Screening Form
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Enter User details to initiate AI-powered mental health
                assessment
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors "
            >
              <VscClose size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-4 py-3">
            <form
              className="space-y-3"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/*  First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {' '}
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSolidUser size={17} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter first name"
                    {...register('firstName', {
                      required: 'First name is required',
                      minLength: { value: 2, message: 'At least 2 characters' },
                    })}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/*  Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {' '}
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSolidUser size={17} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter last name"
                    {...register('lastName', {
                      required: 'Last name is required',
                      minLength: { value: 2, message: 'At least 2 characters' },
                    })}
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiMail size={17} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter email address"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Enter a valid email address',
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="flex gap-2 ">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiPhone size={17} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter phone number"
                      {...register('phone')}
                      disabled={isValidPhoneNumber.status}
                    />
                  </div>
                  {isValidPhoneNumber.status && (
                    <button className="text-green-600" type="button">
                      <span className="flex items-center font-semibold">
                        <FaCheck className="mr-1" />
                        Verified
                      </span>
                    </button>
                  )}
                  {!isValidPhoneNumber.status && (
                    <button
                      type="button"
                      onClick={checkValidPhoneNumber}
                      disabled={phoneValue.length <= 7 || isVerifyingPhone}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center whitespace-nowrap text-sm w-20"
                    >
                      {isVerifyingPhone ? (
                        <>
                          <FaSpinner className="animate-spin mr-2" size={12} />
                          Verifying...
                        </>
                      ) : (
                        'Verify'
                      )}
                    </button>
                  )}
                </div>

                {/* edit phone number */}
                {isValidPhoneNumber.status && (
                  <button
                    type="button"
                    onClick={editPhoneNumber}
                    className="text-xs text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Edit phone number
                  </button>
                )}
                {!isValidPhoneNumber.status && (
                  <p className="mt-1 text-sm text-red-600">
                    {isValidPhoneNumber.msg}
                  </p>
                )}
              </div>

              {/* Verification Code Input Box */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isValidPhoneNumber.status
                    ? 'max-h-96 opacity-100 mt-3'
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Enter Verification Code
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    We've sent a 6-digit verification code to your phone.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={e => setVerificationCode(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleVerifyCode()}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      disabled={isValidCode.status}
                    />
                    {!isValidCode.status && (
                      <button
                        type="button"
                        onClick={handleVerifyCode}
                        disabled={
                          isVerifyingCode ||
                          String(verificationCode).length < 6 ||
                          !timeLeft
                        }
                        className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors w-20 flex items-center justify-center"
                      >
                        {isVerifyingCode ? (
                          <>
                            <FaSpinner
                              className="animate-spin mr-2"
                              size={12}
                            />
                            Verifying...
                          </>
                        ) : (
                          'Verify'
                        )}
                      </button>
                    )}
                    {isValidCode.status && (
                      <button className="text-green-600" type="button">
                        <span className="flex items-center font-semibold">
                          <FaCheck className="mr-1" />
                          Verified
                        </span>
                      </button>
                    )}
                  </div>
                  {verificationError && (
                    <p className="mt-1 text-xs text-red-600">
                      {verificationError}
                    </p>
                  )}
                  {!isValidCode.status && (
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-600">
                        Resend code in {timeLeft} s
                      </span>
                      <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={timeLeft > 0}
                        className="text-xs text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Resend Code
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-2 pb-4 mt-4">
                <button
                  type="submit"
                  disabled={!isValidCode.status}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center text-sm"
                >
                  {isSubmitting ? 'Submitting…' : 'Submit for AI Assessment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
