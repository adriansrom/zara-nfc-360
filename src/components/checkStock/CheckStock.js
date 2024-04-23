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
  const [modalInfo, setModalInfo] = useState({ textBody: '', actions: [] });
  const [showModal, setShowModal] = useState(false);
  const [actualView, setActualView] = useState("STOCK");
  const productInfo =  useProductInfo((store) => store.productInfo);

  const checkStock = useCallback(async () => {
    if (!selectedSize || !selectedColor) return alert('Selecciona talla y color')

    const reference = getReferenceByColorAndSize(productInfo.detail, selectedColor.code, selectedSize.code)
    const stock = await getPhysicalStock({ reference: reference })

    if ( stock > 0 ) {
      setModalInfo({
        textBody: `Actualmente tenemos ${stock} prendas de color ${selectedColor.name} talla ${selectedSize.value} en tienda.`,
        actions:  [
          {
            text: 'GUIAME',
            onClick: () => {
              setShowModal(false);
              setActualView("GUIDE");
            }
          },
          {
            text: 'AYUDA',
            onClick: () => alert("Alguien de personal de tienda acudira a ayudarle en breve.")
          }
        ]
      })
      setShowModal(true);
      return;
    }

    const hasOnlineStock = productInfo.detail.colors.some(color => color.id === selectedColor.code && color.sizes.some(size => size.id === selectedSize.code && size.availability === 'in_stock'))

    if (hasOnlineStock) {
      setModalInfo({
        textBody: 'Actualmente no tenemos stock en tienda, pero si esta disponible online.',
        actions:  [
          {
            text: 'PAGINA DE PRODUCTO',
            onClick: () => {
              alert("Se le redirigira a la pagina de producto.");
              setShowModal(false);
            }
          },
          {
            text: 'AYUDA',
            onClick: () => alert("Alguien de personal de tienda acudira a ayudarle en breve.")
          }
        ]
      })
      setShowModal(true)
      return;
    }

    setModalInfo({
      textBody: 'Actualmente no tenemos stock en tienda, ni hay disponibilidad online. Si lo deseas podemos avisarte cuando este disponible.',
      actions:  [
        {
          text: 'COMING SOON',
          onClick: () => {
            alert("Se ha registrado tu solicitud, te avisaremos cuando este disponible.");
            setShowModal(false);
          }
        },
      ]
    })
    setShowModal(true)

  }, [productInfo.detail, productInfo.sectionName, selectedColor, selectedSize]);


  return (
    <>
      <div className='checkStockContainer'>
        {
          actualView === "STOCK" ? (
            <>
              <ColorSelector availableColors={getAvailableColors(productInfo.detail.colors)} onChangeSelection={setSelectedColor} selectedColor={selectedColor}/>
              <SizeSelector availableSizes={getAvailableSizes(productInfo.detail, selectedColor)} onChangeSelection={setSelectedSize} selectedSize={selectedSize}/>
              <div className='checkStockButtonContainer'>
                <PrimaryButton text='CONSULTAR' size='small' onClick={checkStock} mode='dark' />
              </div>
            </>
          ) : (
            <Guide onClickBack={() => setActualView("STOCK")} />
          )
        }
      </div>
      {
        showModal && (
          <Modal>
            <ModalMultiOption modalInfo={modalInfo} onClose={() => setShowModal(false)} />
          </Modal>
        )
      }
    </>
  )
}
