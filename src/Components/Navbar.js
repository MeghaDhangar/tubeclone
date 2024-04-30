import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../images/tubelogo.png';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from 'react-avatar';
import avatar from '../images/profile.jpg'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSearchSuggestion, toggleSidebar } from '../Utils/appSlice';
import axios from 'axios';
import { SEARCH_SUGGESTION_API } from '../Constants/YouTube';
import storee from '../Utils/store';

function Navbar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [suggestion, setSuggestion] = useState(false);

  const { searchSuggestion } = useSelector((storee) => storee.app)

  const searchVedio = () => {
    dispatch(setCategory(input));
    setInput("")
  }

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  }

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error)
    }
  }

  const openSuggestion=()=>{
    setSuggestion(true);
  }

  useEffect(() => {
    const timer = setTimeout(()=>{
      showSuggestion();
    },200)
     
    return ()=>{
      clearTimeout(timer);
    }
  },[input]);


  return (
    <div className='flex fixed top-0 justify-center w-[100%] z-10 bg-white'>
      <div className='flex  w-[96%] justify-between py-3 items-center'>
        <div className='flex items-center'>
          <GiHamburgerMenu onClick={toggleHandler} size={24} className='cursor-pointer' />
          <img className='px-4' src={logo} width={110} height={110} alt='youtube logo' />
        </div>

        <div className='flex items-center w-[40%]'>
          <div className='w-[100%] py-1 px-1 border border-gray-400 rounded-l-full'>
            {/* <CiSearch size={23}/> */}
            <input value={input} onFocus={openSuggestion} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Search' className=' w-full outline-none px-2 ' />
          </div>

          <button onClick={searchVedio} className='py-2 px-4 border border-gray-400 rounded-r-full'>
            <CiSearch />
          </button>

{
(suggestion && searchSuggestion.length != 0)&&
 <div className='absolute top-3 z-50 w-[35%] py-5 bg-white shadow-lg mt-12 rounded-lg'>
 <ul>
   {
     searchSuggestion.map((text, idx) => {
       return (
         <div className='px-4 flex items-center hover:bg-gray-100'>
               <CiSearch size={20}/>
           <li className='px-2 py-1 cursor-pointer text-md font-medium'>{text}</li>
         </div>
       )
     })
   }
 </ul>
</div>
}
        





        </div>


        <div className='flex items-center w-[10%] justify-between'>
          <CiVideoOn size={24} className='cursor-pointer' />
          <IoIosNotificationsOutline size={24} className='cursor-pointer' />
          <Avatar src={avatar} size="35" round={true} />

        </div>

      </div>
    </div>
  )
}

export default Navbar
