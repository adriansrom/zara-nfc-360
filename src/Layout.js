import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterTabs from './components/footerTabs/FooterTabs'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layoutContainer'>
      <Outlet />
      <FooterTabs />
    </div>
  )
}
