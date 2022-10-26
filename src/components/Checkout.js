import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Modal from './Modal'

const Checkout = () => {
   const course = useLoaderData()
   const [message, setMessage] = useState('')

   const handleCheckout = () => {
      setMessage(`Congratulations! now you have premium access for ${course.title}`)
   }

   return (
      <div className='h-[32rem] flex flex-col items-center justify-center gap-5'>
         <div className='flex flex-col gap-8 w-80 items-start border-primary border-br-1 p-8'>
            <h2 className='bg-gradient-to-r from-purple to-primary text-transparent bg-clip-text text-2xl font-bold'>
               {course?.title.toUpperCase()}
            </h2>

            <span className='font-bold text-primary text-4xl whitespace-nowrap'>{course.price} <span className='font-mono'>$</span></span>

            <ul className='text-lg font-semibold leading-10'>
               <li>1. Life time support</li>
               <li>2. Community access</li>
               <li>3. World class techers</li>
               <li>4. Affordable price</li>
            </ul>

            <button className='button self-end' onClick={handleCheckout}>Checkout</button>
         </div>

         {message && <Modal message={message} />}
      </div>
   )
}

export default Checkout