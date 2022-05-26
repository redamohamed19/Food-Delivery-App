import React from 'react';
import logo from '../imgs/logo.jpg';

import close from "../imgs/icons/close.png"
import {useRef,useState} from "react"



const navbarList=["Today special offers","Why FoodHut","Our Popular food"];



function Navbar() {
    const navbar:any=useRef("null")
     const [isActive, setActive] = useState(true);

    
  return (
    <div className=' relative px-32  py-4 grid grid-cols-8 items-center lg:px-4 sm:gap-2 sm:pr-8 '>
<div className="col-start-1 col-end-2 justify-self-center sm:col-end-3 sm:justify-self-start " ><img className='h-[100px] w-[100px]  sm:h-[80px] sm:w-[80px]' src={logo} alt="logo"/></div>

<ul className='flex gap-6  px-8  col-start-4 col-end-7 justify-self-end lg:col-start-4 sm:hidden'>
    {navbarList.map(Element=>{
        return (<li className='text-[14px] font-bold'> {Element} </li>)
    })  
    
}
    </ul>

    <div className={isActive ? "res_nav close_navbar" : "res_nav open_navbar"}  ref={navbar}> 
    <div className='absolute top-4 right-4'>
     <img src={close} alt="close" onClick={()=>{setActive(true)}}/>
    </div>
     <ul className=''>
    {navbarList.map((Element,index)=>{
        return (<li className='text-[14px] font-bold text-center' key={index}> {Element} </li>)
    })  
    
}
    </ul></div>
    <div className='col-start-7 justify-self-end'> <button className='bg-[#4E60FF] text-white rounded-xl px-4 py-2 font-semibold outline-none'>Sign In</button> </div>

    </div>
  );
}

export default Navbar;
