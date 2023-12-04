import { useState } from 'react';
import { SigninForm, SignupForm } from '../RegisterForms';

const RegisterSidebar = () => {
  const [signup, setSignup] = useState();

  return (
    <div
      className="flex flex-col 2xl:w-[600px] lg:w-[400px] text-black dark:text-white bg-neutral-300 
    border-r-2 border-green-500 shadow-2xl dark:bg-neutral-700 z-10"
    >
      <div className="mx-5 my-5">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Enter Your details below
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 my-2 xl:my-6 font-semibold animate-faderight">
        {signup ? (
          <SignupForm setSignup={setSignup} />
        ) : (
          <SigninForm setSignup={setSignup} />
        )}
      </div>
    </div>
  );
};

export default RegisterSidebar;
