import React from 'react'
import CustomSelector from '../../customSelector/CustomSelector'
import './SizeSelector.css'

export default function SizeSelector({availableSizes, onChangeSelection, selectedSize}) {

  return (
    <div className='sizeSelectorContainer'>
      <h1>TALLA</h1>
      <div className='sizeSelectors'>
        {availableSizes.map(size => (
          <CustomSelector key={size.code} type='SIZE' content={size} action={onChangeSelection} selected={selectedSize}/>
        ))}
      </div>
    </div>
  )
}
