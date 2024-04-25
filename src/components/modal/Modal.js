import React from 'react'
import './Modal.css'

export default function Modal({ children }) {
  return (
    <>
      <dialog open autoFocus className='modalContainer'>
        {children}
      </dialog>  
    </>
  )
}
