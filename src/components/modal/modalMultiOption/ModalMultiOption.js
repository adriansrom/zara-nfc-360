import React from 'react'
import PrimaryButton from '../../primaryButton/PrimaryButton'
import './ModalMultiOption.css'

export default function ModalMultiOption({stock, onClose}) {
  return (
    <div className='modalMultiOptionContainer'>
      <div className='modalMultiOptionTitle'>
        <button onClick={onClose}>x</button>
      </div>
      <div className='modalMultiOptionBody'>
        <p>Actualmente tenemos {stock} prendas de las caracteristicas seleccionadas en tienda.</p>
        <div className='actionButtons'>
            <PrimaryButton text='GUIAME' size='large' onClick={() => console.log("giame")} mode='light' />
            <PrimaryButton text='AYUDA' size='large' onClick={() => console.log("AYUDA")} mode='light' />
        </ div>
      </div>
    </div>
  )
}
