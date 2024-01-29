'use client';

import { useState } from 'react';
import Image from 'next/image';
import car1 from '../../public/car1.jpg';
import StepOne from '@/components/register/StepOne';
import StepTwo from '@/components/register/StepTwo';
import StepThree from '@/components/register/StepThree';
import StepFour from '@/components/register/StepFour';

const Register = () => {
  const [activeStep, setActiveStep] = useState(4);

  //   steps
  const renderStep = (step) => (
    <>
      <h4
        className={`${
          activeStep <= 4 && activeStep >= step
            ? 'bg-primary text-white'
            : 'bg-white text-black'
        } w-11 h-11 rounded-full flex justify-center items-center text-xl font-bold`}
      >
        {step}
      </h4>
      {step < 4 && (
        <div
          className={`${
            activeStep <= 4 && activeStep > step ? 'bg-primary' : 'bg-white'
          } h-1 w-16`}
        />
      )}
    </>
  );

  return (
    <div
      className="relative flex justify-center items-center min-h-[90vh] z-10 py-6"
      style={{ backgroundImage: `url(${car1})` }}
    >
      <Image
        src={car1}
        alt="abstract"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />
      <div className="container px-4 mx-auto">
        {/**********STEPS**********/}
        <div className="flex justify-center items-center z-100 mb-8">
          {[1, 2, 3, 4].map((step) => renderStep(step))}
        </div>

        {/********STEP 1**********/}
        {activeStep === 1 && <StepOne setActiveStep={setActiveStep} />}
        {activeStep === 2 && <StepTwo setActiveStep={setActiveStep} />}
        {activeStep === 3 && <StepThree setActiveStep={setActiveStep} />}
        {activeStep === 4 && <StepFour setActiveStep={setActiveStep} />}
      </div>
    </div>
  );
};

export default Register;
