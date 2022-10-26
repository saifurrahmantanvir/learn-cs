import React from 'react'

const Modal = ({ message }) => {
   return (
      <div className='fixed bottom-8 right-8 p-8 text-primary font-medium text-xl shadow-lg'>
         {message}
      </div>
   )
}

export default Modal