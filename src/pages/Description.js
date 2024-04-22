import React from 'react'
import CheckStock from '../components/checkStock/CheckStock'
import HeaderTabs from '../components/headerTabs/HeaderTabs'
import ProductDescription from '../components/productDescription/ProductDescription'
import ModalNfc from '../components/modal/modalNfc/ModalNfc'
import Modal from '../components/modal/Modal'

export default function Description() {

  const [activeTab, setActiveTab] = React.useState('DESCRIPCION')
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='descriptionContainer'>
      <HeaderTabs changeTab={setActiveTab} showModal={showModal} setShowModal={setShowModal} />
      {
        showModal && (
          <Modal>
            <ModalNfc onClose={() => setShowModal(false)} />
          </Modal>
        )
      }
      {
        activeTab === 'DESCRIPCION' && (
          <ProductDescription />
        )
      }
      {
        activeTab === 'CONSULTAR STOCK' && (
          <CheckStock />
        )
      }
    </div>
  )
}
