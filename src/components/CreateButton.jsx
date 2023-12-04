import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

function CreateButton({ loading }) {
  return (
    <button
      disabled={loading}
      className="flex justify-center items-center p-1 my-5 2xl:w-[400px] lg:w-[300px] h-10 text-lg text-white bg-green-700 rounded-lg hover:bg-primarygreen animate-fadedown"
    >
      {loading ? <LoadingSpinner size={'35'} /> : 'Create'}
    </button>
  );
}

export default CreateButton;
