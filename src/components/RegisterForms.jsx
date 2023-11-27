import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { SpinnerCircularFixed } from 'spinners-react';
import Input from './Input';

export function SingupForm({ setSignup }) {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const signupUser = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      toast.error('Registration Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={signupUser}
      className="flex flex-col items-center gap-6 my-2 xl:my-6"
    >
      <Input
        title={'Name'}
        placeholder={'Enter your name...'}
        type={'test'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        title={'Email'}
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
      <Input
        title={'Confirm Password'}
        placeholder={'Confirm your password...'}
        type={'password'}
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button
        disabled={loading}
        className="flex justify-center items-center mt-5 xl:m-6 w-[400px] h-10 xl:h-12 p-3 mx-4 text-white text-lg bg-green-700 rounded-lg"
      >
        {loading ? (
          <SpinnerCircularFixed
            size={40}
            thickness={100}
            speed={120}
            color="#36ad47"
            secondaryColor="rgba(255, 255, 255, .99)"
          />
        ) : (
          'Sign Up'
        )}
      </button>
      <div className="flex items-center gap-4 mx-10">
        Already have an account?
        <Button
          size="lg"
          variant="gradient"
          className="flex justify-center h-10 p-3 bg-neutral-600 items-center "
          onClick={() => setSignup(false)}
        >
          Log in
        </Button>
      </div>
    </form>
  );
}

export function SigninForm({ setSignup }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/auth/login',
        {
          email,
          password,
        }
      );
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      toast.error('Login Failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={loginUser}
      className="flex flex-col items-center gap-6 my-2 xl:my-6"
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
        className="flex justify-center items-center my-5  w-[400px] h-10 xl:h-12 p-3 mx-4 text-lg text-white bg-green-700 rounded-lg"
      >
        {loading ? (
          <SpinnerCircularFixed
            size={40}
            thickness={100}
            speed={120}
            color="#36ad47"
            secondaryColor="rgba(255, 255, 255, 0.9)"
          />
        ) : (
          'Proceed Order'
        )}
      </button>
      <div className="flex items-center gap-4 mx-10">
        Don't have an account?
        <Button
          size="lg"
          variant="gradient"
          className="flex justify-center h-10 p-3 bg-neutral-600 items-center"
          onClick={() => setSignup(true)}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
