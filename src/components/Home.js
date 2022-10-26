import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div>
         <header className="h-[32rem] flex flex-col justify-center items-center gap-5">
            <div className='flex flex-col gap-5 items-center'>
               <h1 className='bg-gradient-to-r from-purple to-primary text-transparent bg-clip-text font-bold uppercase text-4xl'>Boost your learning with learn.cs</h1>

               <span className='text-xl text-gray-500'>Learn Computer Science from the best intructors around the world</span>
            </div>

            <div className='flex gap-5'>
               <Link to='/register' className='px-5 py-3 bg-primary rounded text-white cursor-pointer'>Sign Up</Link>
               <button className='px-5 py-3 border-primary border-br-1 rounded text-primary cursor-pointer'>Start Learning</button>
            </div>
         </header>

         <section>

         </section>
      </div>
   )
}

export default Home