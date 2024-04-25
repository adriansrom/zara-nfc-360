import React from 'react'
import PrimaryButton from '../../primaryButton/PrimaryButton'
import './ModalMultiOption.css'

export default function ModalMultiOption({modalInfo, onClose}) {
  return (
    <div className='modalMultiOptionContainer'>
      <div className='modalMultiOptionTitle'>
        <button aria-label="Cerrar diálogo" className='light' onClick={onClose}>x</button>
      </div>
      <div className='modalMultiOptionBody'>
        <div className='actionButtons'>
        <p>{modalInfo.textBody}</p>
            {
              modalInfo.actions.map((action) => (
                  <PrimaryButton ariaLabel={action.text.toLowerCase()} key={action.text} text={action.text} size='large' onClick={action.onClick} mode='light' />
              ))
            }
        </div>
      </div>
    </div>
  )
}
