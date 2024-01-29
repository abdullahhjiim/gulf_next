'use client';

import { useState } from 'react';
import OtpInput from 'react-otp-input';

const StepTwo = ({ setActiveStep }) => {
  const [otp, setOtp] = useState('');
  const handleSecondStep = (e) => {
    e.preventDefault();

    console.log(otp);
    if (otp) {
      setActiveStep(3);
    }
  };

  return (
    <form
      onSubmit={handleSecondStep}
      className="otp_checking_form text-center max-w-[555px] mx-auto bg-white bg-opacity-10 p-4 md:p-12 rounded-md backdrop-blur-md mt-6"
    >
      <h4 className="text-2xl font-bold mb-4 text-white">
        Please Check Your Email for OTP!
      </h4>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span> </span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: '3rem', height: '3.5rem' }}
        renderInput={(props) => <input {...props} className="otp-input" />}
      />

      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
