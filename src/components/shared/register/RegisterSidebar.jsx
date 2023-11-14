import { useState } from 'react';

import { SigninForm, SingupForm } from '../../RegisterForms';

function RegisterElement() {
  const [signup, setSignup] = useState();

  return (
    <div className="flex flex-col items-center gap-6 my-2 xl:my-6">
      {signup ? (
        <SingupForm setSignup={setSignup} />
      ) : (
        <SigninForm setSignup={setSignup} />
      )}
    </div>
  );
}

const ResgisterSidebar = () => {
  return (
    <div className="flex flex-col w-[600px] text-white bg-neutral-700 z-10">
      <div className="mx-5 my-5">
        <h1 className="text-4xl">Welcome Back!</h1>
        <p className="text-neutral-400">Enter Your details below</p>
      </div>
      <div className="flex flex-col items-center">
        <RegisterElement />
      </div>
    </div>
  );
};

export default ResgisterSidebar;
