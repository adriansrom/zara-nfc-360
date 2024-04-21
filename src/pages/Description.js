import React from 'react'
import CheckStock from '../components/checkStock/CheckStock'
import HeaderTabs from '../components/headerTabs/HeaderTabs'

export default function Description() {

  const [activeTab, setActiveTab] = React.useState('ESCANEAR')

  return (
    <div className='descriptionContainer'>
      <HeaderTabs activeTab={activeTab} changeTab={setActiveTab}/>
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
          <CheckStock />
        )
      }
    </div>
  )
}
