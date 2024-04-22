import React from 'react'
import './HeaderTabs.css'

export default function HeaderTabs({ activeTab, changeTab }) {

  return (
    <div className='headerTabsContainer'>
      <ul>
        <li className={activeTab === 'ESCANEAR' ? 'active' : ''}>
          <button onClick={() => setShowModal(!showModal)}>ESCANEAR</button>
        </li>
        <li className={activeTab === 'DESCRIPCIÓN' ? 'active' : ''}>
          <button onClick={() => changeTab('DESCRIPCIÓN')}>DESCRIPCIÓN</button>
        </li>
        <li className={activeTab === 'CONSULTAR STOCK' ? 'active' : ''}>
          <button onClick={() => changeTab('CONSULTAR STOCK')}>CONSULTAR STOCK</button>
        </li>
      </ul>
    </div>
  )
}
