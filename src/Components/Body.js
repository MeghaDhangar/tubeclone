import React from 'react'
import Sidebar from './Sidebar'
import VedioContainer from './VedioContainer';
import { Outlet } from 'react-router-dom'
function Body() {
  return (
    <div>
        <div className='flex mt-16'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Body
