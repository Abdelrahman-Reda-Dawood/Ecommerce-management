import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from './Input';
import { LoadingSpinner } from './LoadingSpinner';
import { loginUser } from '../lib/redux/UserSlice';

export function SignupForm({ setSignup }) {
  const validateEmail = (e) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailValue = e.target.value;
    setEmail(emailValue);

    if (email.match(regex)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const signupUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!message) {
      toast.error('Invalid Email input');
      setLoading(false);
    } else {
      try {
        await axios.post(
          'https://shopping-api-7cy0.onrender.com/api/auth/signup',
          {
            name,
            email,
            password,
            passwordConfirm,
          }
        );
        toast.success('Registration successful');
        setSignup(false);
      } catch (error) {
        toast.error('Registration Failed try again');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={signupUser}
      className="flex flex-col items-center gap-6 my-2 xl:my-6 animate-fadedown"
    >
      <Input
        title={'Name'}
        placeholder={'Enter your name...'}
        type={'test'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="relative transition-none">
        <Input
          title={'Email'}
          placeholder={'YourEmail@email.com'}
          type={'email'}
          value={email}
          onChange={validateEmail}
        />
        {email.length === 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            dataSlot="icon"
            className="absolute w-6 h-6 transform top-2/3 -translate-y-1/2 right-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        ) : message ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="green"
            dataSlot="icon"
            className="absolute w-6 h-6 transform top-2/3 -translate-y-1/2 right-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <>
            <p className="text-sm text-red-500 absolute mt-[1px] mx-1">
              Invalid email !
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="red"
              dataSlot="icon"
              className="absolute w-6 h-6 transform top-2/3 -translate-y-1/2 right-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </>
        )}
      </div>
      <Input
        title={'Password'}
        placeholder={'Enter your password...'}
        type={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        title={'Confirm Password'}
        placeholder={'Confirm your password...'}
        type={'password'}
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button
        disabled={loading}
        className="flex justify-center items-center mt-5 xl:m-6 2xl:w-[400px] lg:w-[300px] h-10 xl:h-12 p-3 mx-4 text-white text-lg bg-green-700 rounded-lg"
      >
        {loading ? <LoadingSpinner size={'35'} /> : 'Sign Up'}
      </button>
      <div className="flex items-center gap-4 mx-10 whitespace-nowrap">
        Already have an account?
        <Button
          disabled={loading}
          size="lg"
          variant="gradient"
          className="flex justify-center h-10 p-3 bg-neutral-600 items-center whitespace-nowrap"
          onClick={() => setSignup(false)}
        >
          Log in
        </Button>
      </div>
    </form>
  );
}

export function SigninForm({ setSignup }) {
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        // setEmail('');
        // setPassword('');
        navigate('/');
        toast.success('Login Successfull');
      }
    });
  };
  return (
    <form
      onSubmit={handleLoginEvent}
      className="flex flex-col items-center gap-6 my-2 xl:my-6 animate-fadeup"
    >
      <Input
        title={' Email'}
        placeholder={'YourEmail@email.com'}
        type={'email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        title={'Password'}
        placeholder={'Enter your password...'}
        type={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        disabled={loading}
        color="blue-gray"
        className="flex justify-center items-center my-5 2xl:w-[400px] lg:w-[300px] h-10 xl:h-12 p-3 mx-4 text-lg text-white bg-green-700 rounded-lg"
      >
        {loading ? <LoadingSpinner size={'35'} /> : 'Log in'}
      </button>
      {error && (
        <div className="mt-2 bg-warning p-2 text-white rounded-md">
          {error}
        </div>
      )}
      <div className="flex items-center gap-4 mx-10 whitespace-nowrap">
        Don't have an account?
        <Button
          disabled={loading}
          size="lg"
          variant="gradient"
          className="flex justify-center h-10 p-3 bg-neutral-600 items-center whitespace-nowrap"
          onClick={() => setSignup(true)}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
