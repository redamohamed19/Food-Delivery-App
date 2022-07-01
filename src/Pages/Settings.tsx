import React from 'react';
import Navbar from '../component/navbar';
import SideNav from '../component/Side_Nav';
import SettingsAccount from '../component/Settings_account';

function Settings() {
  return (
    <div className="">
      <Navbar />
      <hr />
      <div className="flex  px-48  py-4 xl:px-8 lg:px-4  sm:flex-col ">
        <SideNav />
        <SettingsAccount />
      </div>
    </div>
  );
}

export default Settings;
