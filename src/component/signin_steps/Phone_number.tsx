import React, { useContext } from 'react';
import { IuserInfo } from '../../Interfaces/Interfaces';
import Globalcontext from '../../Context/StepperContext';

function Phone_number() {
  const USerInfo: IuserInfo = useContext(Globalcontext);

  const HandleChange = (e: any) => {
    const { name, value } = e.target;
    USerInfo.Setstatus({ ...USerInfo.Status, [name]: value });
  };
  console.log(USerInfo);

  return (
    <div className=" px-24 py-10 ">
      <div className="flex gap-4">
        <div className="py-8">
          <label className=" text-lg leading-5 font-semibold text-[#727275] py-2">
            FirstName
          </label>
          <br />
          <input
            className=" border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none "
            value={USerInfo.Status.FirstName + ''}
            type="email"
            placeholder="John "
            name="FirstName"
            onChange={HandleChange}
            required
          />
        </div>
        <div className="py-8">
          <label className=" text-lg leading-5 font-semibold text-[#727275] py-2 ">
            SecondName
          </label>
          <br />
          <input
            className=" border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none "
            value={USerInfo.Status.SecondName + ''}
            type="email"
            placeholder="Carter"
            name="SecondName"
            onChange={HandleChange}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="py-8">
          <label className=" text-lg leading-5 font-semibold text-[#727275] ">
            Email
          </label>
          <br />
          <input
            className=" border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none "
            value={USerInfo.Status.Email + ''}
            type="email"
            placeholder="Email address"
            name="Email"
            onChange={HandleChange}
          />
        </div>
        <div className="py-8">
          <label className=" text-lg leading-5 font-semibold text-[#727275] w-fit">
            Phone Number
          </label>
          <br />
          <input
            className=" border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none "
            value={USerInfo.Status.PhoneNumber + ''}
            type="email"
            placeholder="(123) 456 - 7890"
            name="PhoneNumber"
            onChange={HandleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Phone_number;
