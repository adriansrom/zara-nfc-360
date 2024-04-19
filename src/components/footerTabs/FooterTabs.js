import React from 'react'
import './FooterTabs.css'

export default function FooterTabs() {
  return (
    <div className='footerTabsContainer'>
      <ul>
        <li>
          <button className='selected'>INICIO</button>
        </li>
        <li>
          <button>MENU</button>
        </li>
        <li>
          <button>CUENTA</button>
        </li>
        <li>
          <button>CESTA (0)</button>
        </li>
      </ul>
    </div>
  )
}
