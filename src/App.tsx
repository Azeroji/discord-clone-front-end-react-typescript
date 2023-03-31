import React from 'react'
import Sidebar from './Components/Sidebar.tsx';
import FriendListLayout from './FriendListLayout.tsx';
import Layout from './Layout.tsx';
import Error from './Screens/Error.tsx';
import FriendChat from './Components/FriendChat.tsx';
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="friends" element={<FriendListLayout/>}>
            <Route path=":id" element={<FriendChat/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;