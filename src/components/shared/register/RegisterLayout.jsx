import React, { useContext } from 'react';

import ResgisterSidebar from './RegisterSidebar';
import RegisterIndex from './RegisterIndex';
import { ThemeContext } from '../../../context/ThemeContext';

function RegisterLayout() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="flex bg-neutral-300 dark:bg-[#171716] h-screen overflow-hidden ">
        <ResgisterSidebar />
        <div className=" flex items-center">
          <RegisterIndex />
        </div>
      </div>
    </div>
  );
}

export default RegisterLayout;
