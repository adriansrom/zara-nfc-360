import React, { useCallback, useState } from 'react'
import getPhysicalStock from '../../service/physicalStock/physicalStockService'
import Modal from '../modal/Modal'
import ModalMultiOption from '../modal/modalMultiOption/ModalMultiOption'
import PrimaryButton from '../primaryButton/PrimaryButton'
import './CheckStock.css'
import ColorSelector from './colorSelector/ColorSelector'
import SizeSelector from './sizeSelector/SizeSelector'

export default function CheckStock({ availableSizes, availableColors}) {

  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [showModal, setShowModal] = React.useState(false);
  const [stock, setStock] = React.useState(0);

  const checkStock = useCallback(async () => {
    const res = await getPhysicalStock({ storeId: 691, reference: '0454868471402-V2024', sectionName: 'MAN' })
    if ( res.productAvailability.length > 0 ) {
      setStock(res.productAvailability[0].stock)
      setShowModal(true)
    }
  }, []);

  return (
    <>
      <div className='checkStockContainer'>
        <SizeSelector availableSizes={availableSizes} onChangeSelection={setSelectedSize} />
        <ColorSelector availableColors={availableColors} onChangeSelection={setSelectedColor} />
        <div className='checkStockButtonContainer'>
          <PrimaryButton text='CONSULTAR' size='small' onClick={checkStock} mode='dark' />
        </div>
      </div>
      {
        showModal && (
          <Modal>
            <ModalMultiOption stock={stock} onClose={() => setShowModal(false)}/>
          </Modal>
        )
      }
    </>
  )
}
