import React, { useCallback, useState } from 'react'
import getPhysicalStock from '../../service/physicalStock/physicalStockService'
import { useProductInfo } from '../../store/product/productInfo'
import Modal from '../modal/Modal'
import ModalMultiOption from '../modal/modalMultiOption/ModalMultiOption'
import PrimaryButton from '../primaryButton/PrimaryButton'
import { getAvailableColors, getAvailableSizes, getReferenceByColorAndSize } from '../utils/productInfo'
import './CheckStock.css'
import ColorSelector from './colorSelector/ColorSelector'
import Guide from './guide/Guide'
import SizeSelector from './sizeSelector/SizeSelector'

export default function CheckStock() {

  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [productStockInfo, setProductStockInfo] = useState(null);
  const [actualView, setActualView] = useState("STOCK");
  const productInfo =  useProductInfo((store) => store.productInfo);

  const checkStock = useCallback(async () => {
    if (!selectedSize || !selectedColor) return alert('Selecciona talla y color')

    const reference = getReferenceByColorAndSize(productInfo.detail, selectedColor.code, selectedSize.code)
    const res = await getPhysicalStock({ storeId: 691, reference: reference, sectionName: productInfo.sectionName })

    if ( res.productAvailability.length > 0 ) {
      setProductStockInfo({...res.productAvailability[0].availableProducts[0], color: selectedColor.name})
      setShowModal(true)
    }
  }, [productInfo.detail, productInfo.sectionName, selectedColor, selectedSize]);


  return (
    <>
      <div className='checkStockContainer'>
        {
          actualView === "STOCK" ? (
            <>
              <SizeSelector availableSizes={getAvailableSizes(productInfo.detail.colors[0])} onChangeSelection={setSelectedSize} />
              <ColorSelector availableColors={getAvailableColors(productInfo.detail.colors)} onChangeSelection={setSelectedColor} />
              <div className='checkStockButtonContainer'>
                <PrimaryButton text='CONSULTAR' size='small' onClick={checkStock} mode='dark' />
              </div>
            </>
          ) : (
            <>
             <Guide onClickBack={() => setActualView("STOCK")} />
            </>
          )
        }
      </div>
      {
        showModal && (
          <Modal>
            <ModalMultiOption productStockInfo={productStockInfo} onClose={() => setShowModal(false)} onClickGuide={() => {
              setShowModal(false);
              setActualView("GUIDE");
            }}/>
          </Modal>
        )
      }
    </>
  )
}
