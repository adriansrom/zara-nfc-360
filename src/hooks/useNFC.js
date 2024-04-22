import React from 'react'

export default function useNFC() {
    const [nfcStatus, setNfcStatus] = React.useState('IDLE')

    const abortController = new AbortController();


    const startScanning = async () => {
        try {
            const ndef = new window.NDEFReader();
            await ndef.scan({ signal: abortController.signal });
            setNfcStatus("SCANNING");
            
            ndef.onreading = ({message, serialNumber}) => {
                setNfcStatus(`> Serial Number: ${serialNumber}` + `> Records: (${message.records.length})`);
            };
            
            ndef.onreadingerror = () => {
                setNfcStatus("ERROR");
            };
          } catch (error) {
            setNfcStatus("Argh! " + error);
          }
    }

    const stopScanning = () => {
        abortController.abort();
    }


    return [nfcStatus, startScanning, stopScanning];
}