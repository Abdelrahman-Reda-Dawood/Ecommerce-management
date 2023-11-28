import React from 'react';

import Dropdown from './Dropdown';
import { Button } from '@material-tailwind/react';

const ClientDetailsCard = () => {
  return (
    <div className="2xl:w-[900px] w-fit h-[400px] p-5 my-5 rounded-lg bg-neutral-300 text-black dark:bg-darkbg dark:text-white text-2xl animate-fadeup">
      <h1 className="text-3xl mb-5">Client Details</h1>
      <div className=" space-y-3 mb-2">
        <p>
          Name:
          <span className="text-[#979797]"> CLIENT_NAME</span>
        </p>
        <p>
          Phone Number:
          <span className="text-[#979797]"> PHONE_NUMBER</span>
        </p>
        <p>
          Email:
          <span className="text-[#979797]"> USER_EMAIL</span>
        </p>
      </div>
      {/* Bottom Buttons */}
      <div className="flex justify-center mt-10 p-5 gap-1 ">
        <div className="flex lg:flex-row md:flex-row xs:flex-col ">
          <Button
            size="sm"
            color="green"
            className="text-lg bg-green-700 flex items-center mx-1 h-12 "
          >
            Save
          </Button>
          <Dropdown title={['Paid', 'Not Paid']} />
        </div>
        <div className="flex lg:flex-row md:flex-row xs:flex-col">
          <Button
            size="sm"
            color="green"
            className="text-lg bg-green-700 flex items-center mx-1 h-12 "
          >
            Save
          </Button>
          <Dropdown title={['Deliverd', 'Not Deliverd']} />
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsCard;
