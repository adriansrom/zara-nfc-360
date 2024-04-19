import React from 'react'
import './HeaderTabs.css'

export default function HeaderTabs({ changeTab }) {
  return (
    <div className='headerTabsContainer'>
      <ul>
        <li>
          <button onClick={() => changeTab('ESCANEAR')}>ESCANEAR</button>
        </li>
        <li>
          <button onClick={() => changeTab('LEER DESCRIPCIÓN')}>LEER DESCRIPCIÓN</button>
        </li>
        <li>
          <button onClick={() => changeTab('CONSULTAR STOCK')}>CONSULTAR STOCK</button>
        </li>
      </ul>
    </div>
  )
}
