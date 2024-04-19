import React from 'react'
import CheckStock from '../components/checkStock/CheckStock'
import HeaderTabs from '../components/headerTabs/HeaderTabs'

export default function Description() {

  const [activeTab, setActiveTab] = React.useState('ESCANEAR')
  const productInfo = {
    availableSizes: [
      { code: '10', value: 'S' },
      { code: '11', value: 'M' },
      { code: '12', value: 'L' },
      { code: '13', value: 'XL' },
    ],
    availableColors: [
      { code: '14', value: '#8e4103' },
      { code: '15', value: '#8e0370' },
      { code: '16', value: '#5d58ea' },
    ]
  }

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
          <CheckStock availableSizes={productInfo.availableSizes} availableColors={productInfo.availableColors}/>
        )
      }
    </div>
  )
}
