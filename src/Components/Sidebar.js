import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import storee from '../Utils/store';
const sidebarArray = [

   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   },
   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   },
   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   },
   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   },
   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   },
   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   },
   {
      icons: <AiFillHome size={24} />,
      title: "Home"

   },
   {
      icons: <SiYoutubeshorts size={24} />,
      title: "Short"

   },
   {
      icons: <MdOutlineSubscriptions size={24} />,
      title: "Subcription"

   }
]
function Sidebar() {
   const op = useSelector((storee) => storee.app.open);
  

   return (
      <div className={`relative left-0 ${op ? "w-[15%]" :"w-[5%]"}  p-5 h-[calc(100vh-4.625rem)] bg-white overflow-hidden overflow-y-scroll`}>
         {
            sidebarArray.map((item, index) => {
               return (
                  <div key={index} className=' flex my-4 ml-2'>
                     {item.icons}
                     <p className={`ml-5 ${op} ? " " : 'hidden`}>{item.title}</p>
                  </div>
               )
            })

         }
      </div>
   )
}

export default Sidebar
