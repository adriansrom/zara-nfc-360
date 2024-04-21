import React from 'react'
import PrimaryButton from '../../primaryButton/PrimaryButton'
import './ModalMultiOption.css'

export default function ModalMultiOption({modalInfo, onClose}) {
  return (
    <div className='modalMultiOptionContainer'>
      <div className='modalMultiOptionTitle'>
        <button className='light' onClick={onClose}>x</button>
      </div>
      <div className='modalMultiOptionBody'>
        <p>{modalInfo.textBody}</p>
        <div className='actionButtons'>
            {
              modalInfo.actions.map((action) => (
                <PrimaryButton key={action.text} text={action.text} size='large' onClick={action.onClick} mode='light' />
              ))
            }
        </ div>
      </div>
    </div>
  )
}
