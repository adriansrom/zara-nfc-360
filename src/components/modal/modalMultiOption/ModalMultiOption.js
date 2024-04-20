import React from 'react'
import PrimaryButton from '../../primaryButton/PrimaryButton'
import './ModalMultiOption.css'

export default function ModalMultiOption({productStockInfo, onClose, onClickGuide}) {
  return (
    <div className='modalMultiOptionContainer'>
      <div className='modalMultiOptionTitle'>
        <button className='light' onClick={onClose}>x</button>
      </div>
      <div className='modalMultiOptionBody'>
        <p>Actualmente tenemos {productStockInfo.stock} prendas de color {productStockInfo.color} talla {productStockInfo.size} en tienda.</p>
        <div className='actionButtons'>
            <PrimaryButton text='GUIAME' size='large' onClick={onClickGuide} mode='light' />
            <PrimaryButton text='AYUDA' size='large' onClick={() => alert("Alguien de personal de tienda acudira a ayudarle en breve.")} mode='light' />
        </ div>
      </div>
    </div>
  )
}
