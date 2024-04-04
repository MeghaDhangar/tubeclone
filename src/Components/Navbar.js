 import React, { useState } from 'react'
 import { GiHamburgerMenu } from "react-icons/gi";
 import logo from '../images/tubelogo.png';
 import { IoIosNotificationsOutline } from "react-icons/io";
 import { CiVideoOn } from "react-icons/ci";
 import Avatar from 'react-avatar';
 import avatar from '../images/profile.jpg'
 import { CiSearch } from "react-icons/ci";
 import {useDispatch} from 'react-redux';
import { toggleSidebar } from '../Utils/appSlice';

 function Navbar() {
  const dispatch= useDispatch();
  const toggleHandler=()=>{
    dispatch(toggleSidebar());
  }     

  // 1:42 MNT
   return (
      <div className='flex fixed top-0 justify-center w-[100%] z-10 bg-white'>
       <div className='flex  w-[96%] justify-between py-3 items-center'>
             <div className='flex items-center'>
             <GiHamburgerMenu onClick={toggleHandler}  size={24} className='cursor-pointer'/>
             <img className='px-4' src={logo} width={110} height={110} alt='youtube logo'/>
            </div> 

             <div className='flex items-center w-[40%]'> 
                <div className='w-[100%] py-1 px-1 border border-gray-400 rounded-l-full'>
                    {/* <CiSearch size={23}/> */}
                 <input type='text' placeholder='Search' className=' w-full outline-none px-2 '/>
                </div>
                <button  className='py-2 px-4 border border-gray-400 rounded-r-full'>
                    <CiSearch/>
                </button>
            </div> 


             <div className='flex items-center w-[10%] justify-between'>
             <CiVideoOn size={24} className='cursor-pointer'/>
             <IoIosNotificationsOutline size={24} className='cursor-pointer'/>
             <Avatar src={avatar} size="35" round={true} />

            </div> 

            </div>
     </div>
   )
 }
 
 export default Navbar
 