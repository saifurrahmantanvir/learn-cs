import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ allCourses }) => {
   return (
      <nav className='col-span-1 md:col-span-4'>
         <ul className='flex flex-wrap md:flex-col gap-3 text-xs md:text-lg'>
            {
               allCourses.map(({ id, category }) => (
                  <Link key={id} to={`/courses/${id}`}>
                     <li className='cursor-pointer text-gray-500 p-3 bg-gray-100 md:bg-transparent md:hover:bg-gray-100 hover:text-primary whitespace-nowrap'>{category}</li>
                  </Link>

               ))
            }
         </ul>
      </nav>
   )
}

export default Sidebar