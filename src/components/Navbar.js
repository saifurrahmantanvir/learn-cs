import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import avatar from '../avatar.png'

const links = [
   { to: '/', name: 'home' },
   { to: '/about', name: 'about' },
   { to: '/courses', name: 'courses' },
   { to: '/blogs', name: 'blogs' }
]

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const { user } = useContext(AuthContext)

   const toggleNav = () => {
      setNav(!nav)
   }

   return (
      <nav className="flex gap-10 items-center justify-between py-8">
         <Link to='/'>
            <span className="font-bold text-3xl tracking-tight text-primary-light font-kumbh-sans cursor-pointer">Learn.CS</span>
         </Link>

         {/* <ul className='basis-3/4 flex p-5 md:p-3 bg-white font-semibold md:bg-transparent md:gap-8'> */}
         <ul className={`basis-3/4 flex flex-col p-5 md:p-3 bg-white md:bg-transparent md:flex-row md:gap-8 font-semibold fixed z-20 w-1/2 md:w-min left-0 top-0 bottom-0 ${nav ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static transition-transform`}>
            {links.map(({ to, name }) => (
               <Link to={to} key={name} className='nav-link'>{name}</Link>
            ))}
         </ul>

         {user && user.uid
            ? <img src={avatar} alt='profile avatar' className='h-10 w-10 cursor-pointer' />
            : (
               <div className='flex gap-3'>
                  <Link to='/login' className='px-5 py-3 border-primary border-br-1 rounded text-primary cursor-pointer'>Login</Link>
                  <Link to='/register' className='button'>Sign Up</Link>
               </div>

            )
         }
      </nav>
   )
}

export default Navbar