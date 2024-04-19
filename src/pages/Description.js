import React from 'react'
import HeaderTabs from '../components/headerTabs/HeaderTabs'

export default function Description() {

  const [activeTab, setActiveTab] = React.useState('ESCANEAR')

  return (
    <div className='descriptionContainer'>
      <HeaderTabs changeTab={setActiveTab}/>
      {
        activeTab === 'ESCANEAR' && (
          <div>ESCANEAR</div>
        )
      }
      {
        activeTab === 'LEER DESCRIPCIÓN' && (
          <div>LEER DESCRIPCIÓN</div>
        )
      }
      {
        activeTab === 'CONSULTAR STOCK' && (
          <div>CONSULTAR STOCK</div>
        )
      }
    </div>
  )
}
