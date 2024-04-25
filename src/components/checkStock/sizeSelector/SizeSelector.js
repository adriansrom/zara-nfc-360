import React from 'react'
import CustomSelector from '../../customSelector/CustomSelector'
import './SizeSelector.css'

export default function SizeSelector({availableSizes, onChangeSelection, selectedSize}) {

  return (
    <div className='sizeSelectorContainer'>
      <p aria-label='Selector de talla'>TALLA</p>
      <ul className='sizeSelectors'>
        {availableSizes.map(size => (
          <li>
            <CustomSelector key={size.code} type='SIZE' content={size} action={onChangeSelection} selected={selectedSize}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
