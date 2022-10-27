import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Courses = () => {
   const allCourses = useLoaderData()

   return (
      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
         <Sidebar allCourses={allCourses} />
         <Outlet />
      </div>
   )
}

export default Courses