import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Components/Sidebar.tsx'

export default function Layout(){
  return (
    <div className="bg-[#313338] flex">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
