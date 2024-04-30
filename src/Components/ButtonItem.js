import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../Utils/appSlice';



const buttonList = ["All", "JavaScript", "Java", "Live", "Music", "Vlogs", "Computer", "React Js", " Watched", "Trending","Comedy", "Programming", "Technology", "Graphic Desine", "News", "Cricket", "vlogs"]
function ButtonItem() {
   const [active,setActive] =useState("All");
    const dispatch = useDispatch();
   const videoByTag = (tag)=>{
    if(active!=tag){
      dispatch(setCategory(tag))
      setActive(tag)
    }
   }
  return (
    <div className='flex py-4 w-full no-scrollbar overflow-x-scroll'>
      {
        buttonList.map((buttonName, index) => {
          return (
            <>
              <div key={index} >
                <button onClick={()=>{videoByTag(buttonName)}} className={`${active==buttonName ? "bg-slate-900 text-white" : "bg-gray-200" } px-4 font-medium mx-2 py-1 rounded-lg`}><span className='whitespace-nowrap'>{buttonName}</span></button>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default ButtonItem
