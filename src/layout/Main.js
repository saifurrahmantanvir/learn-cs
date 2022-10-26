import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
   return (
      <div className='page'>
         <div className='col-start-2'>
            <Navbar />
            <Outlet />

         </div>
      </div>
   )
}

export default Main