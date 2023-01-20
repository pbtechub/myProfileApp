import React from 'react'
import Billings from '../Pages/Billings'

import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom';
import General from '../Pages/General';
import Password from '../Pages/Password';
import Message from '../Pages/Message';
import Apps from '../Pages/Apps';
import Transactions from '../Pages/Transactions';
import LogOut from '../Pages/LogOut';

const MenuPage = ({selected, setSelected}) => {
  return (
    <div className='relative px-[40px] py-[20px] w-[100%] h-[100%]'>
      <Navbar 
        selected = {selected}
        setSelected={setSelected}/>
        <Routes>
          <Route path='/General' element={<General />}/>
          <Route path='/password' element={<Password />}/>
          <Route path='/message' element={<Message />}/>
          <Route path='/billings' element={<Billings />}/>
          <Route path='/apps' element={<Apps />}/>
          <Route path='/transactions' element={<Transactions />}/>              
          <Route path='/logout' element={<LogOut />}/>              
        </Routes>
      
    </div>
  )
}

export default MenuPage