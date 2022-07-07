import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import logo from '../imgs/logo.jpg';
import axios from 'axios';
import { useRef } from 'react';

function FormLogin() {
  const [user, setUser] = useState({});
  const auth: any = useAuth();
  const navigate = useNavigate();
  const email: any = useRef();
  const password: any = useRef();

  const handlesubmit = () => {
    const url = 'http://localhost:8000/api/signin';
    axios
      .get(url, {
        params: {
          Email: email.current.value,
          Password: password.current.value,
        },
      })
      .then(function (response) {
        console.log(response);
      });
    auth.login(user);
    navigate('/');
  };

  return (
    <div className="w-[45%] lg:w-[50%] md:w-full ">
      <img
        className="h-[100px] w-[100px] mx-36 mt-4 xl:mx-24 lg:mx-12 md:mx-4 md:mt-2"
        src={logo}
        alt="logo"
      />
      <div className="mx-48 mt-24 3xl:mx-44 2xl:mx-36 xl:mx-24 lg:mx-8 lg:mt-12 md:ml-[15%] md:mt-6">
        {' '}
        <h1 className="text-6xl leading-[60px] font-bold py-4 ">Login</h1>
        <p className="text-[14px] leading-[20px] text-[#545563] py-4">
          Sign in with your data that you entered during your registration.
        </p>
        <form>
          <div>
            {' '}
            <label className="text-[12px] ">Email</label>
            <br />
            <input
              ref={email}
              className="border-2 rounded-md h-[44px] p-2   w-[90%]"
              type="email"
              placeholder="name@example.com"
            ></input>
          </div>
          <br />
          <div>
            {' '}
            <label className="text-[12px] ">Password</label>
            <br />
            <input
              ref={password}
              className="border-2 rounded-md h-[44px] p-2  w-[90%] "
              type="password"
              placeholder="min. 8 characters"
            ></input>
          </div>
          <div className="flex gap-2 items-center py-8">
            {' '}
            <input type="checkbox"></input>
            <p>Keep me logged in</p>
          </div>
          <input
            className="bg-[#4E60FF] text-white text-[14px] rounded-md my-2 h-[44px] p-2 rounded w-[90%] "
            type="button"
            value="Login"
            onClick={handlesubmit}
          ></input>
          <br />
          <input
            className="text-[#4E60FF] text-[14px] my-2 rounded-md h-[44px] p-2 rounded w-[90%]"
            type="button"
            value="Forgot password"
          ></input>
          <div>
            <div className="flex py-16 justify-center gap-2 lg:py-8">
              {' '}
              <p className="text-[#545563] text-[14px] ">
                Don’t have an account?{' '}
              </p>
              <a className="text-[#4E60FF] " href="www.google.com">
                <Link to={'/signup'}>Sign up</Link>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
