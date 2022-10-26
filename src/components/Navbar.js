import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [nav, setNav] = useState(false)

   const toggleNav = () => {
      setNav(!nav)
   }

   return (
      <nav className="flex gap-5 items-center justify-between py-8">
         <Link to='/'>
            <span className="font-bold text-3xl tracking-tight text-primary-light font-kumbh-sans cursor-pointer">Learn.CS</span>
         </Link>

         <ul className={`basis-3/4 flex flex-col p-5 md:p-3 bg-white md:bg-transparent md:flex-row md:gap-8 font-medium fixed z-20 w-1/2 md:w-min left-0 top-0 bottom-0 ${nav ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static transition-transform`}>
            <Link to="/" className='nav-link'>home</Link>
            <Link to="/about" className='nav-link'>about</Link>
            <Link to="/courses" className='nav-link'>courses</Link>
            <Link to="/blogs" className='nav-link'>blogs</Link>
         </ul>

         <button className='px-5 py-3 bg-primary rounded text-white cursor-pointer whitespace-nowrap' onClick={toggleNav}>Sign Up</button>
      </nav>
   )
}

export default Navbar