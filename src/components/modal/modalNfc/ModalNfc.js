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
      <h3>LISTO PARA ESCANEAR</h3>
      <img className={"icon" + (nfcStatus === "ERROR" ? " error" : "")} src={nfcImage} alt="animacion gif nfc" />
      <button onClick={onCancel}>CANCELAR</button>
    </div>
  )
}
