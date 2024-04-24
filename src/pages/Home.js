import React from 'react';
import Modal from '../components/modal/Modal';
import ModalNfc from '../components/modal/modalNfc/ModalNfc';
import StoreMode from '../components/storeMode/StoreMode';

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='homeContainer'>
        <StoreMode actionButton={() => setShowModal(true)} />
        {
          showModal && (
            <Modal>
              <ModalNfc onClose={() => setShowModal(false)} />
            </Modal>
          )
        }
    </div>
  )
}
