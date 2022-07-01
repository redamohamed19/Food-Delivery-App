import React from 'react';
import User from '../imgs/icons/user.svg';
import Adress from '../imgs/icons/map pin.svg';
import Payment from '../imgs/icons/credit card.svg';
import Security from '../imgs/icons/shield on.svg';

const Setting_List = [
  { h2: 'Account', h5: 'Personal information', image: User },
  { h2: 'Address', h5: 'Shippings addresses', image: Adress },
  { h2: 'Payment method', h5: 'Connected credit cards', image: Payment },
  { h2: 'Security', h5: 'Password, 2FA', image: Security },
];

function Side_Nav() {
  return (
    <div className="w-2/6 sm:w-full">
      <h1 className=" text-xl leading-7 font-semibold  text-[#2B2B43] spacing  tracking-widest ">
        Settings
      </h1>
      {Setting_List.map((Element) => {
        return (
          <div className="flex rounded-xl border-[#EDEEF2] border-[1px] w-4/5 my-4 py-3 px-1 items-center gap-4 sm:w-full">
            <div className="bg-[#EDEEF2] rounded-xl w-10 h-10 flex justify-center items-center">
              <img
                className=" hover:fill-black"
                src={Element.image}
                alt="user"
              />
            </div>

            <div>
              <h2 className=" text-sm leading-5 font-bold  text-[#2B2B43] ">
                {Element.h2}
              </h2>
              <h5 className=" text-[13px] leading-4   text-[#545563] ">
                {Element.h5}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Side_Nav;
