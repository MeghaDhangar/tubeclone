import React from 'react'
 


 const buttonList =["All","JavaScript","Java","Live","Music","Vlogs","Bhojpuri Songs","React Js", "Trending" ,"Programming"]
function ButtonItem() {
  return (
    <div className='py-4'>
     {
        buttonList.map((buttonName,index)=>{
            return <button key={index} className='bg-gray-200 px-4 font-medium mx-2 py-1 rounded-lg'>{buttonName}</button>
        })
     }
    </div>
  )
}

export default ButtonItem
