import React from 'react'
import './ModalNfc.css'

export default function ModalNfc({onClose}) {
  return (
    <div className='modalNfcContainer'>
      <h3>Listo para escanear</h3>
      {/* gift */}
      <button onClick={onClose}>Cancelar</button>
    </div>
  )
}
