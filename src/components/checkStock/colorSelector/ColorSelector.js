import React from 'react'
import CustomSelector from '../../customSelector/CustomSelector'
import './ColorSelector.css'

export default function ColorSelector({availableColors, onChangeSelection, selectedColor}) {

  return (
    <div className='colorSelectorContainer'>
      <p aria-label='Selector de color'>COLOR</p>
      <ul className='colorSelectors'>
        {availableColors.map(color => (
          <li>
            <CustomSelector key={color.code} type='COLOR' content={color} action={onChangeSelection} selected={selectedColor}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
