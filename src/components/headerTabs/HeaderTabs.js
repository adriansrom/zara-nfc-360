import React from 'react'
import './HeaderTabs.css'

export default function HeaderTabs({ changeTab, showModal, setShowModal, activeTab }) {

  return (
    <div className='headerTabsContainer'>
      <ul>
        <li className={activeTab === 'ESCANEAR' ? 'active' : ''}>
          <button onClick={() => setShowModal(!showModal)}>ESCANEAR</button>
        </li>
        <li className={activeTab === 'DESCRIPCION' ? 'active' : ''}>
          <button onClick={() => changeTab('DESCRIPCION')}>DESCRIPCIÓN</button>
        </li>
        <li className={activeTab === 'CONSULTAR STOCK' ? 'active' : ''}>
          <button onClick={() => changeTab('CONSULTAR STOCK')}>CONSULTAR STOCK</button>
        </li>
      </ul>
    </div>
  )
}
