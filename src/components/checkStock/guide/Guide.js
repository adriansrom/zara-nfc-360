import React from 'react'
import PrimaryButton from '../../primaryButton/PrimaryButton'
import './Guide.css'

export default function Guide({onClickBack}) {
  return (
    <div className='guideContainer'>
      <div className='guideBackBtn'>
        <button className='dark' onClick={onClickBack}>volver</button>
      </div>
      <img src="assets/images/mapa-tienda.png" alt="mapa tienda"/>
      <div className='guideBtn'>
        <PrimaryButton text='AYUDA' size='small' onClick={() => alert("Alguien de personal de tienda acudira a ayudarle en breve.")} mode='dark' />
      </div>
    </div>
  )
}
