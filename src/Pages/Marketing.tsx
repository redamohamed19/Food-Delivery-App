import React from 'react';
import Search from '../imgs/icons/Search_White.svg';
import Banner from '../imgs/ads/banner.png';
import NavBarNoAutothentificated from '../component/NavBarNoAutothentificated';

function Marketing() {
  return (
    <div className=" h-[100vh]">
      <NavBarNoAutothentificated />
      <div className="flex  px-16 py-12 sssm:py-10 sssm:px-4 sm:py-4 lg:px-8 sm:pr-8 justify-around items-center lg:flex-col lg:gap-32 ">
        <div className="w-2/5 lg:w-full ">
          <h1 className=" text-6xl font-bold py-10 sm:text-[50px]   sssm:text-4xl leading-20  sssm:py-3 ">
            We're <span className="text-[#4E60FF] ">Serious</span> For{' '}
            <span className="text-[#4E60FF]">Food</span> And Delivery{' '}
          </h1>
          <p className=" text-2xl py-3 sssm:text-lg ">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
          <form>
            <div className=" border-gray border-[1px] flex rounded-xl py-3 px-2 justify-around  my-8 ">
              <input
                className="w-4/5 outline-none"
                type="text"
                placeholder="Introduce your City"
                name="Location"
              />
              <button className=" rounded-full bg-[#4E60FF] p-2  ">
                <img src={Search} alt="Search" />
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/5 relative flex justify-center items-center lg:w-full lg:hidden ">
          <div className=" ">
            <img
              className="w-[450px] max-w-none 2xl:w-[550px]  "
              src={Banner}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
