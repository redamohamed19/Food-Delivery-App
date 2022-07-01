import React from 'react';
import avatar from '../imgs/avatar_high_res.png';

function Settings_account() {
  return (
    <div className=" w-4/6 sm:w-full">
      <h1 className=" text-xl leading-7 font-semibold  text-[#2B2B43] spacing  tracking-widest ">
        Account
      </h1>
      <form className="border-[#EDEEF2] border-[1px] rounded-xl my-8 py-4 px-4 ">
        <h1 className=" text-lg leading-6 font-bold  text-[#2B2B43] spacing  tracking-widest py-4 ">
          Personal information
        </h1>
        <p className=" text-xs  font-semibold text-[#545563] leading-4 py-2">
          Avatar
        </p>
        <div className="flex gap-5 items-center">
          <img className=" w-20 h-20 rounded-xl " src={avatar} alt="avatar" />
          <button className="border-[1px] border-[#4E60FF] px-3 py-2 text-[#4E60FF] leading-5 text-base font-bold rounded-lg">
            Change
          </button>
          <button className="px-3 py-2 text-[#83859C] leading-5 text-base font-bold">
            Remove
          </button>
        </div>
        <div className="flex sssm:flex-col justify-between py-6 gap-3">
          <div className="flex flex-col w-1/2 gap-y-2 sssm:w-full">
            <label className=" text-xs leading-4 font-semibold color-[#545563] ">
              First name
            </label>
            <input
              className="border-[#C7C8D2] border-[1px] rounded-lg px-2 py-2 "
              type="text"
              placeholder="Ex: Jane"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-y-2 sssm:w-full">
            <label className=" text-xs leading-4 font-semibold color-[#545563] ">
              Last name
            </label>
            <input
              className="border-[#C7C8D2] border-[1px] rounded-lg px-2 py-2 "
              type="text"
              placeholder="Ex: Robertson"
            />
          </div>
        </div>
        <div className="flex justify-between py-6 gap-3 sssm:flex-col">
          <div className="flex flex-col w-1/2 gap-y-2 sssm:w-full">
            <label className="text-xs leading-4 font-semibold color-[#545563] ">
              Email
            </label>
            <input
              className="border-[#C7C8D2] border-[1px] rounded-lg px-2 py-2 "
              type="email"
              placeholder="jane.robertson@example.com"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-y-2 sssm:w-full">
            <label className="text-xs leading-4 font-semibold color-[#545563]  ">
              Phone number
            </label>
            <input
              className="border-[#C7C8D2] border-[1px] rounded-lg px-2 py-2"
              type="text"
              placeholder="(217) 555-0113"
            />
          </div>
        </div>
        <h1 className=" text-lg leading-6 font-bold  text-[#2B2B43] spacing  tracking-widest py-4 ">
          Email notifications
        </h1>
        <div className="flex flex-wrap gap-y-3 py-3">
          <div className="w-1/2">
            <input
              className="w-4 h-4 rounded"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <label className="text-base leading-5  ml-2">New deals</label>
          </div>
          <div className="w-1/2">
            <input
              className="w-4 h-4 rounded"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <label className="text-base leading-5  ml-2">
              Password changes
            </label>
          </div>
          <div className="w-1/2">
            <input
              className="w-4 h-4 rounded"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <label className="text-base leading-5  ml-2">New restaurants</label>
          </div>
          <div className="w-1/2">
            <input
              className="w-4 h-4 rounded"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <label className="text-base leading-5  ml-2">Special offers</label>
          </div>
          <div className="w-1/2">
            <input
              className="w-4 h-4 rounded"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <label className="text-base leading-5  ml-2">Order statuses</label>
          </div>
          <div className="w-1/2">
            <input
              className="w-4 h-4 rounded"
              type="checkbox"
              id="scales"
              name="scales"
              checked
            />
            <label className="text-base leading-5  ml-2">Newsletter</label>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-4 items-center sssm:flex-col">
          <button className="border-[1px] border-[#FF5C60] px-3 py-2 text-[#FF5C60] leading-5 text-base font-bold rounded-lg sssm:w-full">
            Log out
          </button>
          <div className="flex py-4 gap-4 sssm:w-full">
            <button className="border-[1px] border-[#83859C] px-3 py-2 text-[#83859C] leading-5 text-base font-bold rounded-lg sssm:w-1/2">
              Discard changes
            </button>
            <button className="bg-[#4E60FF] px-3 py-2 text-white leading-5 text-base font-bold rounded-lg sssm:w-1/2">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Settings_account;
