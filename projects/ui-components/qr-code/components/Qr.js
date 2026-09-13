import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code';

const Qr = () => {

    const [input,setInput]= useState('');
    const [qrCode, setQrCode] = useState('');

    function handleButtonClick()
    {
        setQrCode(input);
        setInput('');
    }
  return (
    <div className='code'>
        <h1>Qr Code Generation</h1>
        <div className='input'>
            <input
                onChange={(e)=>setInput(e.target.value)}
                type='text'
                placeholder='Enter the value here'
                value={input}/>
            <button onClick={handleButtonClick}> Submit</button>
            
        </div>
            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff'/>
    </div>
  )
}

export default Qr