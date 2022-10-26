import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
   const isLoggedIn = false

   // return isLoggedIn ? children : <Navigate to='/login' />
   return children
}

export default ProtectedRoute