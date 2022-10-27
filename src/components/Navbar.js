import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import avatar from '../assets/avatar.png'
import navIcon from '../assets/nav.svg'

const links = [
   { to: '/', name: 'home' },
   { to: '/about', name: 'about' },
   { to: '/courses', name: 'courses' },
   { to: '/blogs', name: 'blogs' }
]

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const { user, logOut } = useContext(AuthContext)

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

         <div className='flex gap-3 items-center'>
            {user && user.uid
               ? (
                  <React.Fragment>
                     <img src={avatar} alt='profile avatar' className='h-12 w-12 cursor-pointer' />
                     <button className='button' onClick={logOut}>Logout</button>
                  </React.Fragment>
               ) : (
                  <div className='flex gap-3'>
                     <Link to='/login' className='px-4 py-2 border-primary border-br-1 rounded text-primary cursor-pointer'>Login</Link>
                     {/* <Link to='/register' className='button'>Sign Up</Link> */}
                  </div>

               )
            }
            <button onClick={toggleNav} className='md:hidden'>
               <img src={navIcon} alt='nav icon' className='h-8 w-8' />
            </button>
         </div>
      </nav>
   )
}

export default Navbar