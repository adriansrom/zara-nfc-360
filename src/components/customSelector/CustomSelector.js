import React from 'react'
import './CustomSelector.css'

export default function CustomSelector({ type, content, action }) {
  return (
    <div className='customSelector'>
      {
        type === 'SIZE' ? (
          <button className='size' onClick={() => action(content.code)}>{content.value}</button>
        ) : (
          <button onClick={() => action(content.code)} style={{backgroundColor: content.value}} ></button>
        )
      }
    </ div>
  )
}
