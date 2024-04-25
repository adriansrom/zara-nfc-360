import React from 'react'
import CheckStock from '../components/checkStock/CheckStock'
import HeaderTabs from '../components/headerTabs/HeaderTabs'
import Modal from '../components/modal/Modal'
import ModalNfc from '../components/modal/modalNfc/ModalNfc'
import ProductDescription from '../components/productDescription/ProductDescription'

export default function Description() {

  const [activeTab, setActiveTab] = React.useState('DESCRIPCION')
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='descriptionContainer'>
      <div aria-hidden={showModal}>
        <HeaderTabs changeTab={setActiveTab} showModal={showModal} setShowModal={setShowModal} activeTab={activeTab} />
      </div>
      {
        showModal && (
            <Modal>
              <ModalNfc onClose={() => {
                setShowModal(false)
                setActiveTab('DESCRIPCION')
              }} />
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
