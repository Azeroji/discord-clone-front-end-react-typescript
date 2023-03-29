import React from 'react'
import Sidebar from './Components/Sidebar.tsx';
import FriendList from './Components/FriendList.tsx';

const App = () => {
  return(
    <div className="bg-[#313338] flex">
      <Sidebar/>
      <FriendList/>
    </div>
  )
}

export default App;