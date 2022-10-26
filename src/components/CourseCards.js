import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card'

const CourseCards = () => {
   const allCourses = useLoaderData()

   return (
      <div className='col-span-8 grid gap-8 mb-14'>
         <div className='grid grid-cols-3 gap-5'>
            {allCourses.map((course) => (
               <Card key={course.id} course={course} />
            ))}

         </div>
      </div>
   )
}

export default CourseCards