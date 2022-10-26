import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ allCourses }) => {
   return (
      <nav className='col-span-4'>
         <ul className='flex flex-col gap-3'>
            {
               allCourses.map(({ id, category }) => (
                  <Link key={id} to={`/courses/${id}`}>
                     <li className='cursor-pointer text-gray-500 p-3 hover:bg-gray-100 hover:text-primary'>{category}</li>
                  </Link>

               ))
            }
         </ul>
      </nav>
   )
}

export default Sidebar