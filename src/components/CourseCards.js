import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card'

const CourseCards = () => {
   const allCourses = useLoaderData()

   return (
      <div className='col-span-1 md:col-span-8 grid gap-8 mb-14'>
         <div className='grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-5'>
            {allCourses.map((course) => (
               <Card key={course.id} course={course} />
            ))}

         </div>
      </div>
   )
}

export default CourseCards