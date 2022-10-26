import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ course }) => {
   return (
      <div className='rounded border-br-1 border-primary p-3'>
         <Link to={`/courses/${course.id}`} className='flex flex-col gap-5'>
            <figure className='h-40 overflow-hidden bg-gray-100'>
               <img src={course.image} alt='' className='h-full w-full object-cover rounded-sm' />
            </figure>

            <h2 className='font-bold text-sm text-primary'>{course.title.toUpperCase()}</h2>
            <p className='text-gray-500 text-sm'>{course.details.slice(0, 80)}...</p>
         </Link>
      </div>
   )
}

export default Card