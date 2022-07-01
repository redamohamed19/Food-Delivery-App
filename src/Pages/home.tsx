import React from 'react';
import Navbar from '../component/navbar';
import Restaurant from '../component/Restaurant';
import Dessert from '../imgs/ads/dessert.png';
import burger from '../imgs/ads/humburger.png';
import broccoli from '../imgs/icons/broccoli.png';
import burger2 from '../imgs/icons/burger.png';
import cake from '../imgs/icons/cake.png';
import meat from '../imgs/icons/meat.png';
import pizza from '../imgs/icons/pizza.png';
import sushi from '../imgs/icons/sushi.png';
import Resto1 from '../imgs/ads/Royal Sushi House.png';
import Resto2 from '../imgs/ads/Burgers & Pizza.png';
import Resto3 from '../imgs/ads/Ninja sushi.png';
import Resto4 from '../imgs/ads/Sushi master.png';
import Resto5 from '../imgs/ads/Japanese sushi.png';
import Resto6 from '../imgs/ads/Kobe.png';

const categories = [
  { name: 'pizza', icon: pizza },
  { name: 'Burger', icon: burger2 },
  { name: 'BBQ', icon: meat },
  { name: 'Sushi', icon: sushi },
  { name: 'Vegan', icon: broccoli },
  { name: 'Desserts', icon: cake },
];
const Restaurants = [
  {
    fetured: true,
    image: Resto1,
    name: 'Royal Sushi House',
    time: '30-40 min',
    price: '$32 min sum',
    categories: [
      { name: 'Sushi', icon: sushi },
      { name: 'Vegan', icon: broccoli },
    ],
  },
  {
    fetured: true,
    image: Resto2,
    name: 'Burgers & Pizza',
    time: '40-60 min',
    price: '$24 min sum',
    categories: [
      { name: 'Burger', icon: burger2 },
      { name: 'Pizza', icon: pizza },
    ],
  },
  {
    fetured: false,
    image: Resto3,
    name: 'Ninja sushi',
    time: '20-40 min',
    price: '$40 min sum',
    categories: [{ name: 'Sushi', icon: sushi }],
  },
  {
    fetured: false,
    image: Resto4,
    name: 'Sushi master',
    time: '60-70 min',
    price: '$49 min sum',
    categories: [{ name: 'Sushi', icon: sushi }],
  },
  {
    fetured: false,
    image: Resto5,
    name: 'Japanese sushi',
    time: '30-50 min',
    price: '$104 min sum',
    categories: [{ name: 'Sushi', icon: sushi }],
  },
  {
    fetured: false,
    image: Resto6,
    name: 'Kobe',
    time: '20-30 min',
    price: '$57 min sum',
    categories: [{ name: 'Sushi', icon: sushi }],
  },
];

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-around px-40 py-4 sm:flex-col xl:gap-5 xl:px-24       sm:px-20 ssm:px-12 sssm:px-2 ">
        <div className="bg-[#dadbff] flex lg:flex-col-reverse pr-32 lg:items-center rounded-2xl gap-6 pt-8 justify-between 2xl:pr-16 xl:justify-evenly">
          <img src={Dessert} alt="dessert" className=" w-[225px] " />
          <div className="flex flex-col sm:flex-row lg:justify-around justify-around w-full lg:pl-4 pb-4">
            <div>
              {' '}
              <h2 className="text-xl leading-7 text-[#2B2B43] font-semibold ">
                All deserts
              </h2>
              <h1 className="text-[40px] leading-[56px] font-extrabold text-[#4E60FF] ">
                20% OFF
              </h1>
            </div>
            <p className="text-sm text-[#83859C] ">Deserty</p>
          </div>
        </div>
        <div className="bg-[#e5daef] flex lg:flex-col-reverse pr-32 lg:items-center rounded-2xl gap-6 pt-8 justify-between 2xl:pr-16 xl:justify-evenly">
          <img src={burger} alt="dessert" className=" w-[225px] " />
          <div className="flex flex-col sm:flex-row justify-around w-full lg:pl-4 pb-4">
            <div>
              <h2 className="text-xl leading-7 text-[#2B2B43] font-semibold ">
                Big Burgers
              </h2>
              <h1 className="text-[40px] leading-[56px] font-extrabold text-[#FD6D22] ">
                50% OFF
              </h1>
            </div>
            <p className="text-sm text-[#83859C] ">Fooddies</p>
          </div>
        </div>
      </div>
      <ul className="flex px-48 gap-16 2xl:gap-4 sm:flex-wrap lg:px-24  justify-center  sm:px-6 py-4">
        {categories.map((Element, index) => {
          return (
            <li className="w-40 sm:w-28 h-20 rounded-2xl bg-[#F8F9FF] flex items-center flex-col justify-evenly cursor-pointer">
              <img src={Element.icon} alt={Element.name} />
              <p className="text-sm leading-5 font-bold">{Element.name}</p>
            </li>
          );
        })}
      </ul>
      <h1 className="text-xl font-semibold leading-7 px-48 xl:px-24 ssm:px-12  text-[#2B2B43] py-8 ">
        Nearby restaurants
      </h1>
      <div className="flex px-48 flex-wrap gap-x-24 gap-y-4 justify-around xl:px-24 ssm:px-12  ">
        {Restaurants.map((Element, Index) => {
          return <Restaurant Data={Element} />;
        })}
      </div>
    </div>
  );
}

export default Home;
