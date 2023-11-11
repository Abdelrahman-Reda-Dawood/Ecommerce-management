import React from 'react';

import ResgisterSidebar from './RegisterSidebar';
import RegisterIndex from './RegisterIndex';

function RegisterLayout() {
  return (
    <div className="flex bg-[#171716] h-screen overflow-hidden ">
      <ResgisterSidebar />
      <div className=" flex items-center">
        <RegisterIndex />
      </div>
    </div>
  );
}

export default RegisterLayout;
