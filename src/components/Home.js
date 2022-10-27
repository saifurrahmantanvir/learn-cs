import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div>
         <header className="h-[25rem] md:h-[32rem] flex flex-col justify-center items-center gap-5">
            <div className='flex flex-col gap-5'>
               <h1 className='bg-gradient-to-r from-purple to-primary text-transparent bg-clip-text font-bold uppercase text-2xl md:text-4xl'>Boost your learning with learn.cs</h1>

               <span className='text-lg md:text-xl text-gray-500'>Learn Computer Science from the best intructors around the world</span>

               <div className='flex gap-5'>
                  <Link to='/register' className='button'>Sign Up</Link>
                  <Link to='/courses' className='px-5 py-3 border-primary border-br-1 rounded text-primary cursor-pointer whitespace-nowrap'>Start Learning</Link>
               </div>
            </div>
         </header>
      </div>
   )
}

export default Home