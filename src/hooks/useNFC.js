import React from 'react'

export default function useNFC(onScan) {
    const [nfcStatus, setNfcStatus] = React.useState('IDLE');

    const abortController = new AbortController();


    const startScanning = async () => {
        //TODO: DELETE
        setTimeout(() => {
            console.log("SCANNED!");
            onScan({ productId: Math.floor(Math.random() * 10) });
        }, 5000)

        try {
            const ndef = new window.NDEFReader();
            await ndef.scan({ signal: abortController.signal });
            setNfcStatus("SCANNING");


            ndef.onreading = ({ message, serialNumber }) => {
                setNfcStatus("SUCCESS")
                onScan({ serialNumber, message });
            };

            ndef.onreadingerror = () => {
                setNfcStatus("ERROR");
            };
        } catch (error) {
            setNfcStatus("UNAVAILABLE")
        }
    }

    const stopScanning = () => {
        abortController.abort();
    }


    return [nfcStatus, startScanning, stopScanning];
}