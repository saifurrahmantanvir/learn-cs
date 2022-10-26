import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const CourseDetails = () => {
   const course = useLoaderData()

   return (
      <div className='flex flex-col col-span-8 gap-8 mb-14'>
         <figure className='flex justify-center border-br-1 border-primary'>
            <img src={course.image} alt='course thumbnail' />
         </figure>

         <div className='flex justify-between'>
            <h2 className='bg-gradient-to-r from-purple to-primary text-transparent bg-clip-text text-4xl font-bold'>{course.title.toUpperCase()}</h2>

            <span className='font-bold text-primary text-4xl whitespace-nowrap'>{course.price} <span className='font-mono'>$</span></span>
         </div>
         <span className='text-primary'>Saifur rahman</span>

         <p className='leading-[1.8] font-normal text-gray-500'>{course.details}</p>

         <Link to={`/checkout/${course.id}`} className='button self-end'>Get premium access</Link>
      </div>
   )
}

export default CourseDetails