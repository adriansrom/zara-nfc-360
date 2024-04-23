import React from 'react'

export default function useNFC(onScan) {
    const [nfcStatus, setNfcStatus] = React.useState('IDLE');

    const abortController = new AbortController();


    const startScanning = async () => {

        try {
            const ndef = new window.NDEFReader();
            await ndef.scan({ signal: abortController.signal });
            setNfcStatus("SCANNING");


            ndef.onreading = (data) => {
                var payload = new TextDecoder().decode(data.message.records[0].data.buffer);
                setNfcStatus("SUCCESS")
                onScan(payload);
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