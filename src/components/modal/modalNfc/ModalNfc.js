import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import nfcImage from '../../../assets/nfc.gif';
import useNFC from '../../../hooks/useNFC';
import './ModalNfc.css';

export default function ModalNfc({ onClose }) {
  const [nfcStatus, startScanning, stopScanning] = useNFC(
    (data) => {
      navigate("/description/" + data);
      stopScanning();
      onClose();
    }
  );

  const navigate = useNavigate();

  const onCancel = () => {
    stopScanning();
    onClose();
  }

  useEffect(() => {
    startScanning();
  }, [startScanning])

  return (
    <div className='modalNfcContainer'>
      <p>LISTO PARA ESCANEAR</p>
      <img aria-hidden="true" className={"icon" + (nfcStatus === "ERROR" ? " error" : "")} src={nfcImage} alt="animacion gif nfc" />
      <form method="dialog" aria-label="Cancelar boton">
        <button aria-label="Cancelar" onClick={onCancel}>CANCELAR</button>
      </form>
    </div>
  )
}
