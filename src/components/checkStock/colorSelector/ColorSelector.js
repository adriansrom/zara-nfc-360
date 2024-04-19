import React from 'react'
import CustomSelector from '../../customSelector/CustomSelector'
import './ColorSelector.css'

export default function ColorSelector({availableColors, onChangeSelection}) {

  return (
    <div className='sizeSelectorContainer'>
      <h1>COLOR</h1>
      <div className='sizeSelectors'>
        {availableColors.map(color => (
          <CustomSelector key={color.code} type='COLOR' content={color} action={onChangeSelection} />
        ))}
      </div>
    </div>
  )
}
