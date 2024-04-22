import React, { useEffect } from 'react'
import './ModalNfc.css'
import useNFC from '../../../hooks/useNFC'

export default function ModalNfc({onClose}) {
  const [nfcStatus, startScanning, stopScanning] = useNFC();

  const onCancel = () => {
    stopScanning();
    onClose();
  }

  useEffect(() => {
    startScanning();
  }, [])

  return (
    <div className='modalNfcContainer'>
      <h3>Listo para escanear</h3>
      {/* gift */}
      {nfcStatus}
      <button onClick={onCancel}>Cancelar</button>
    </div>
  )
}
