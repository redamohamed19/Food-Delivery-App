import React, { useContext } from 'react';
import axios from 'axios';
import { IStepperController, IuserInfo } from '../Interfaces/Interfaces';

import Globalcontext from '../Context/StepperContext';
import User_info from './signin_steps/PasswordEntry';

function Stepper_controlers(props: IStepperController) {
  const USerInfo: IuserInfo = useContext(Globalcontext);

  const element = USerInfo.Status;
  const SubmitNewUser = () => {
    if (props.currentStep === props.steps.length - 2) {
      const url = 'http://localhost:8000/api/post';
      axios.post(url, element).then(function (response) {
        console.log(response);
      });
    }
  };
  return (
    <div className=" flex items-center justify-around mt-4 mb-8">
      <button
        onClick={props.handleClick}
        className={`text-[#4A3AFF] border-[1px] border-[#4A3AFF] rounded-xl px-5 py-3 text-lg leading-5 cursor-pointer transition duration-200 ease-in-out ${
          props.currentStep === 1 ? 'opacity-50 cursor-not-allowed ' : ''
        }`}
      >
        Previous step
      </button>
      <button
        onClick={() => {
          props.handleClick('next');
          SubmitNewUser();
        }}
        disabled={!props.GoNext}
        className={`text-white bg-[#4A3AFF] rounded-xl px-5 py-3 text-lg leading-5 cursor-pointer transition duration-200 ease-in-out outline-none opacity-95 hover:opacity-100 ${
          !props.GoNext ? 'opacity-50 cursor-not-allowed ' : ''
        }`}
      >
        {props.currentStep === props.steps.length ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
}

export default Stepper_controlers;
