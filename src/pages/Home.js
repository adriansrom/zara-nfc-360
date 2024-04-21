import React from 'react';
import Modal from '../components/modal/Modal';
import ModalNfc from '../components/modal/modalNfc/ModalNfc';

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='homeContainer'>
      <>
        <button className='dark' onClick={() => setShowModal(true)}>
          NFC
        </button>
        {
          showModal && (
            <Modal>
              <ModalNfc onClose={() => setShowModal(false)}/>
            </Modal>
          )
        }
      </>
    </div>
  )
}