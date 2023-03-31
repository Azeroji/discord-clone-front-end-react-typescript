import React from 'react'
import {Outlet} from 'react-router-dom'
import FriendList from './Components/FriendList.tsx'

export default function FriendListLayout(){

  return (
    <div className="bg-[#313338] flex-1 flex">
        <FriendList/>
        <Outlet/>
    </div>
  )
}
