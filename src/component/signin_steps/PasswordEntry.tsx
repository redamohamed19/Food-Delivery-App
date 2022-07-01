import React, { useState, useRef, useContext } from 'react';
import { IuserInfo, IPasswordEntry } from '../../Interfaces/Interfaces';
import Globalcontext from '../../Context/StepperContext';

function User_info(props: IPasswordEntry) {
  const USerInfo: IuserInfo = useContext(Globalcontext);
  const [MatchPassword, SetMatchPassword] = useState(false);
  const [PasswordStrenght, SetPasswordStrenght] = useState(1);
  const PasswordRef: any = useRef();
  const ConfirmPassword: any = useRef();

  const CheckMatchPassword = (): void => {
    if (PasswordRef.current.value !== ConfirmPassword.current.value) {
      SetMatchPassword(true);
      props.SetGoNext(false);
    } else {
      SetMatchPassword(false);
      props.SetGoNext(true);
    }
  };
  const PasswordCheckstrength = (e: any): void => {
    const { name, value } = e.target;
    console.log(name, value);
    USerInfo.Setstatus({ ...USerInfo.Status, [name]: value });
    var strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    var mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );

    if (strongRegex.test(PasswordRef.current.value)) {
      SetPasswordStrenght(4);
    } else if (mediumRegex.test(PasswordRef.current.value)) {
      SetPasswordStrenght(3);
    } else {
      SetPasswordStrenght(2);
    }
  };
  console.log(USerInfo);
  return (
    <div className=" px-24 py-10 ">
      <div className="">
        <div className="py-8  ">
          <label className=" text-lg leading-5 font-semibold text-[#727275] py-2">
            Password
          </label>
          <br />
          <input
            className=" border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none w-full "
            onChange={PasswordCheckstrength}
            value={USerInfo.Status.Password + ''}
            type="password"
            name="Password"
            ref={PasswordRef}
          />
          <div className="flex h-3 w-full gap-5 py-5">
            <div className="w-1/5 h-[10px] bg-green-300 rounded  "> </div>{' '}
            <div
              className={`w-1/5 h-[10px]  rounded  ${
                PasswordStrenght > 1 ? 'bg-green-300' : 'bg-gray-100'
              } `}
            >
              {' '}
            </div>
            <div
              className={`w-1/5 h-[10px]  rounded  ${
                PasswordStrenght > 2 ? 'bg-green-300' : 'bg-gray-100'
              } `}
            >
              {' '}
            </div>
            <div
              className={`w-1/5 h-[10px] rounded  ${
                PasswordStrenght > 3 ? 'bg-green-300' : 'bg-gray-100'
              } `}
            >
              {' '}
            </div>
          </div>
        </div>
        <div className="py-8">
          <label className=" text-lg leading-5 font-semibold text-[#727275] py-2 w-fit ">
            Confirm Password
          </label>
          <br />
          <input
            className=" border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none w-full "
            onChange={CheckMatchPassword}
            type="password"
            ref={ConfirmPassword}
          />
        </div>
        {MatchPassword && (
          <p className="text-red-500">Please reverify your password</p>
        )}
      </div>
    </div>
  );
}

export default User_info;
