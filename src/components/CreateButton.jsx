import React from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

function CreateButton({ loading }) {
  return (
    <button
      disabled={loading}
      className="flex justify-center items-center my-5 2xl:w-[400px] lg:w-[300px] h-10 text-lg text-white bg-green-700 rounded-lg hover:bg-primarygreen animate-fadedown"
    >
      {loading ? (
        <SpinnerCircularFixed
          size={35}
          thickness={100}
          speed={120}
          color="#36ad47"
          secondaryColor="rgba(255, 255, 255, 0.9)"
        />
      ) : (
        'Create'
      )}
    </button>
  );
}

export default CreateButton;
