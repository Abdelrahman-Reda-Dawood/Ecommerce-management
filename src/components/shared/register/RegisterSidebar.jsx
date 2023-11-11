import { Button } from '@material-tailwind/react';
import { useState } from 'react';

import Input from '../../Input';

function RegisterElement() {
  const [signup, setSignup] = useState();

  const goToSignup = () => {
    setSignup(true);
  };
  const goToSignin = () => {
    setSignup(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 my-2 xl:my-6">
      {signup ? (
        <>
          <Input title={'Enter Name'} placeholder={'Name...'} />
          <Input title={'Enter Email'} placeholder={'Email...'} />
          <Input title={'Enter Password'} placeholder={'Password...'} />
          <Input
            title={'Confirm Password'}
            placeholder={'Confirm Password...'}
          />
          <Button
            size="lg"
            color="blue-gray"
            className="flex justify-center items-center mt-5 xl:m-6 w-[400px] h-10 xl:h-12 p-3 mx-4 text-lg bg-green-700"
          >
            Sign up
          </Button>
          <div className="flex items-center gap-4 mx-10">
            Already have an account?
            <Button
              size="lg"
              variant="gradient"
              className="flex justify-center h-10 p-3 bg-neutral-600 items-center "
              onClick={() => goToSignin()}
            >
              Log in
            </Button>
          </div>
        </>
      ) : (
        <>
          <Input title={'Enter Email'} placeholder={'Email...'} />
          <Input
            title={'Enter Password'}
            placeholder={'Password...'}
          />
          <Button
            size="lg"
            color="blue-gray"
            className="flex justify-center items-center my-5  w-[400px] h-10 xl:h-12 p-3 mx-4 text-lg bg-green-700"
          >
            Proceed Order
          </Button>
          <div className="flex items-center gap-4 mx-10">
            Don't have an account?
            <Button
              size="lg"
              variant="gradient"
              className="flex justify-center h-10 p-3 bg-neutral-600 items-center "
              onClick={() => goToSignup()}
            >
              Sign up
            </Button>
          </div>
        </>
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
