import React from 'react'
import './HeaderTabs.css'

export default function HeaderTabs({ changeTab, showModal, setShowModal }) {
  return (
    <div className='headerTabsContainer'>
      <ul>
        <li>
          <button onClick={() => setShowModal(!showModal)}>ESCANEAR</button>
        </li>
        <li>
          <button onClick={() => changeTab('DESCRIPCION')}>DESCRIPCIÓN</button>
        </li>
        <li>
          <button onClick={() => changeTab('CONSULTAR STOCK')}>CONSULTAR STOCK</button>
        </li>
      </ul>
    </div>
  )
}
